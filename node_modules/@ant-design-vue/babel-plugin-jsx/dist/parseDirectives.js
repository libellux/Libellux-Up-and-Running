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
Object.defineProperty(exports, "__esModule", { value: true });
var t = __importStar(require("@babel/types"));
var utils_1 = require("./utils");
/**
 * Get JSX element type
 *
 * @param path Path<JSXOpeningElement>
 */
var getType = function (path) {
    var typePath = path
        .get('attributes')
        .find(function (attribute) {
        if (!t.isJSXAttribute(attribute)) {
            return false;
        }
        return t.isJSXIdentifier(attribute.get('name'))
            && attribute.get('name').node.name === 'type';
    });
    return typePath ? typePath.get('value').node : null;
};
var parseModifiers = function (value) {
    var modifiers = [];
    if (t.isArrayExpression(value)) {
        modifiers = value.elements
            .map(function (el) { return (t.isStringLiteral(el) ? el.value : ''); }).filter(Boolean);
    }
    return modifiers;
};
var parseDirectives = function (args) {
    var _a;
    var name = args.name, path = args.path, value = args.value, state = args.state, tag = args.tag, isComponent = args.isComponent;
    var modifiers = name.split('_');
    var arg;
    var val;
    var directiveName = ((_a = modifiers.shift()) === null || _a === void 0 ? void 0 : _a.replace(/^v/, '').replace(/^-/, '').replace(/^\S/, function (s) { return s.toLowerCase(); })) || '';
    if (directiveName === 'model' && !t.isJSXExpressionContainer(path.get('value'))) {
        throw new Error('You have to use JSX Expression inside your v-model');
    }
    var shouldResolve = !['html', 'text', 'model'].includes(directiveName)
        || (directiveName === 'model' && !isComponent);
    if (t.isArrayExpression(value)) {
        var elements = value.elements;
        var _b = __read(elements, 3), first = _b[0], second = _b[1], third = _b[2];
        if (t.isStringLiteral(second)) {
            arg = second;
            modifiers = parseModifiers(third);
        }
        else if (second) {
            modifiers = parseModifiers(second);
        }
        val = first;
    }
    var modifiersSet = new Set(modifiers);
    return {
        directiveName: directiveName,
        modifiers: modifiersSet,
        value: val || value,
        arg: arg,
        directive: shouldResolve ? [
            resolveDirective(path, state, tag, directiveName),
            val || value,
            !!modifiersSet.size && t.unaryExpression('void', t.numericLiteral(0), true),
            !!modifiersSet.size && t.objectExpression(__spread(modifiersSet).map(function (modifier) { return t.objectProperty(t.identifier(modifier), t.booleanLiteral(true)); })),
        ].filter(Boolean) : undefined,
    };
};
var resolveDirective = function (path, state, tag, directiveName) {
    var _a;
    if (directiveName === 'show') {
        return utils_1.createIdentifier(state, 'vShow');
    }
    if (directiveName === 'model') {
        var modelToUse = void 0;
        var type = getType(path.parentPath);
        switch (tag.value) {
            case 'select':
                modelToUse = utils_1.createIdentifier(state, 'vModelSelect');
                break;
            case 'textarea':
                modelToUse = utils_1.createIdentifier(state, 'vModelText');
                break;
            default:
                if (t.isStringLiteral(type) || !type) {
                    switch ((_a = type) === null || _a === void 0 ? void 0 : _a.value) {
                        case 'checkbox':
                            modelToUse = utils_1.createIdentifier(state, 'vModelCheckbox');
                            break;
                        case 'radio':
                            modelToUse = utils_1.createIdentifier(state, 'vModelRadio');
                            break;
                        default:
                            modelToUse = utils_1.createIdentifier(state, 'vModelText');
                    }
                }
                else {
                    modelToUse = utils_1.createIdentifier(state, 'vModelDynamic');
                }
        }
        return modelToUse;
    }
    return t.callExpression(utils_1.createIdentifier(state, 'resolveDirective'), [
        t.stringLiteral(directiveName),
    ]);
};
exports.default = parseDirectives;
