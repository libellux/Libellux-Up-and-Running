"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformJSXElement = void 0;
var t = __importStar(require("@babel/types"));
var helper_module_imports_1 = require("@babel/helper-module-imports");
var utils_1 = require("./utils");
var buildProps_1 = __importDefault(require("./buildProps"));
/**
 * Get children from Array of JSX children
 * @param paths Array<JSXText | JSXExpressionContainer  | JSXElement | JSXFragment>
 * @returns Array<Expression | SpreadElement>
 */
var getChildren = function (paths, state) { return paths
    .map(function (path) {
    if (path.isJSXText()) {
        var transformedText = utils_1.transformJSXText(path);
        if (transformedText) {
            return t.callExpression(utils_1.createIdentifier(state, 'createTextVNode'), [transformedText]);
        }
        return transformedText;
    }
    if (path.isJSXExpressionContainer()) {
        var expression = utils_1.transformJSXExpressionContainer(path);
        if (t.isIdentifier(expression)) {
            var name_1 = expression.name;
            var _a = (path.scope.getBinding(name_1) || {}).referencePaths, referencePaths = _a === void 0 ? [] : _a;
            referencePaths.forEach(function (referencePath) {
                utils_1.walksScope(referencePath, name_1, 2 /* DYNAMIC */);
            });
        }
        return expression;
    }
    if (t.isJSXSpreadChild(path)) {
        return utils_1.transformJSXSpreadChild(path);
    }
    if (path.isCallExpression()) {
        return path.node;
    }
    if (path.isJSXElement()) {
        return transformJSXElement(path, state);
    }
    throw new Error("getChildren: " + path.type + " is not supported");
}).filter((function (value) { return (value !== undefined
    && value !== null
    && !t.isJSXEmptyExpression(value)); })); };
var transformJSXElement = function (path, state) {
    var children = getChildren(path.get('children'), state);
    var _a = buildProps_1.default(path, state), tag = _a.tag, props = _a.props, isComponent = _a.isComponent, directives = _a.directives, patchFlag = _a.patchFlag, dynamicPropNames = _a.dynamicPropNames, slots = _a.slots;
    var _b = state.opts.optimize, optimize = _b === void 0 ? false : _b;
    var slotFlag = path.getData('slotFlag') || 1 /* STABLE */;
    // @ts-ignore
    var createVNode = t.callExpression(utils_1.createIdentifier(state, 'createVNode'), [
        tag,
        props,
        (children.length || slots) ? (isComponent
            ? t.objectExpression(__spread([
                !!children.length && t.objectProperty(t.identifier('default'), t.arrowFunctionExpression([], t.arrayExpression(utils_1.buildIIFE(path, children))))
            ], (slots ? (t.isObjectExpression(slots)
                ? slots.properties
                : [t.spreadElement(slots)]) : []), [
                optimize && t.objectProperty(t.identifier('_'), t.numericLiteral(slotFlag)),
            ]).filter(Boolean))
            : t.arrayExpression(children)) : t.nullLiteral(),
        !!patchFlag && optimize && t.numericLiteral(patchFlag),
        !!dynamicPropNames.size && optimize
            && t.arrayExpression(__spread(dynamicPropNames.keys()).map(function (name) { return t.stringLiteral(name); })),
    ].filter(Boolean));
    if (!directives.length) {
        return createVNode;
    }
    return t.callExpression(utils_1.createIdentifier(state, 'withDirectives'), [
        createVNode,
        t.arrayExpression(directives),
    ]);
};
exports.transformJSXElement = transformJSXElement;
exports.default = (function () { return ({
    JSXElement: {
        exit: function (path, state) {
            if (!state.get('vue')) {
                state.set('vue', helper_module_imports_1.addNamespace(path, 'vue'));
            }
            path.replaceWith(transformJSXElement(path, state));
        },
    },
}); });
