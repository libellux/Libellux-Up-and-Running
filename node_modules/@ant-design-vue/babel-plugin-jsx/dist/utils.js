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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildIIFE = exports.walksScope = exports.isFragment = exports.transformJSXExpressionContainer = exports.transformJSXSpreadChild = exports.transformJSXText = exports.getJSXAttributeName = exports.getTag = exports.transformJSXMemberExpression = exports.checkIsComponent = exports.isDirective = exports.createIdentifier = void 0;
var t = __importStar(require("@babel/types"));
var html_tags_1 = __importDefault(require("html-tags"));
var svg_tags_1 = __importDefault(require("svg-tags"));
/**
 * create Identifier
 * @param state
 * @param id string
 * @returns MemberExpression
 */
var createIdentifier = function (state, id) { return t.memberExpression(state.get('vue'), t.identifier(id)); };
exports.createIdentifier = createIdentifier;
/**
 * Checks if string is describing a directive
 * @param src string
 */
var isDirective = function (src) { return src.startsWith('v-')
    || (src.startsWith('v') && src.length >= 2 && src[1] >= 'A' && src[1] <= 'Z'); };
exports.isDirective = isDirective;
/**
 * Check if a Node is fragment
 * @param {*} path JSXIdentifier | JSXMemberExpression | JSXNamespacedName
 * @returns boolean
 */
var isFragment = function (path) { return t.isJSXMemberExpression(path)
    && path.node.property.name === 'Fragment'; };
exports.isFragment = isFragment;
/**
 * Check if a Node is a component
 *
 * @param t
 * @param path JSXOpeningElement
 * @returns boolean
 */
var checkIsComponent = function (path) {
    var namePath = path.get('name');
    if (t.isJSXMemberExpression(namePath)) {
        return !isFragment(namePath); // For withCtx
    }
    var tag = namePath.node.name;
    return !html_tags_1.default.includes(tag) && !svg_tags_1.default.includes(tag);
};
exports.checkIsComponent = checkIsComponent;
/**
 * Transform JSXMemberExpression to MemberExpression
 * @param path JSXMemberExpression
 * @returns MemberExpression
 */
var transformJSXMemberExpression = function (path) {
    var objectPath = path.node.object;
    var propertyPath = path.node.property;
    var transformedObject = t.isJSXMemberExpression(objectPath)
        ? transformJSXMemberExpression(path.get('object'))
        : t.isJSXIdentifier(objectPath)
            ? t.identifier(objectPath.name)
            : t.nullLiteral();
    var transformedProperty = t.identifier(propertyPath.name);
    return t.memberExpression(transformedObject, transformedProperty);
};
exports.transformJSXMemberExpression = transformJSXMemberExpression;
/**
 * Get tag (first attribute for h) from JSXOpeningElement
 * @param path JSXElement
 * @param state State
 * @returns Identifier | StringLiteral | MemberExpression | CallExpression
 */
var getTag = function (path, state) {
    var _a, _b;
    var namePath = path.get('openingElement').get('name');
    if (namePath.isJSXIdentifier()) {
        var name_1 = namePath.node.name;
        if (!html_tags_1.default.includes(name_1) && !svg_tags_1.default.includes(name_1)) {
            return path.scope.hasBinding(name_1)
                ? t.identifier(name_1)
                : (((_b = (_a = state.opts).isCustomElement) === null || _b === void 0 ? void 0 : _b.call(_a, name_1)) ? t.stringLiteral(name_1)
                    : t.callExpression(createIdentifier(state, 'resolveComponent'), [t.stringLiteral(name_1)]));
        }
        return t.stringLiteral(name_1);
    }
    if (namePath.isJSXMemberExpression()) {
        return transformJSXMemberExpression(namePath);
    }
    throw new Error("getTag: " + namePath.type + " is not supported");
};
exports.getTag = getTag;
var getJSXAttributeName = function (path) {
    var nameNode = path.node.name;
    if (t.isJSXIdentifier(nameNode)) {
        return nameNode.name;
    }
    return nameNode.namespace.name + ":" + nameNode.name.name;
};
exports.getJSXAttributeName = getJSXAttributeName;
/**
 * Transform JSXText to StringLiteral
 * @param path JSXText
 * @returns StringLiteral | null
 */
var transformJSXText = function (path) {
    var node = path.node;
    var lines = node.value.split(/\r\n|\n|\r/);
    var lastNonEmptyLine = 0;
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].match(/[^ \t]/)) {
            lastNonEmptyLine = i;
        }
    }
    var str = '';
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var isFirstLine = i === 0;
        var isLastLine = i === lines.length - 1;
        var isLastNonEmptyLine = i === lastNonEmptyLine;
        // replace rendered whitespace tabs with spaces
        var trimmedLine = line.replace(/\t/g, ' ');
        // trim whitespace touching a newline
        if (!isFirstLine) {
            trimmedLine = trimmedLine.replace(/^[ ]+/, '');
        }
        // trim whitespace touching an endline
        if (!isLastLine) {
            trimmedLine = trimmedLine.replace(/[ ]+$/, '');
        }
        if (trimmedLine) {
            if (!isLastNonEmptyLine) {
                trimmedLine += ' ';
            }
            str += trimmedLine;
        }
    }
    return str !== '' ? t.stringLiteral(str) : null;
};
exports.transformJSXText = transformJSXText;
/**
 * Transform JSXExpressionContainer to Expression
 * @param path JSXExpressionContainer
 * @returns Expression
 */
var transformJSXExpressionContainer = function (path) { return path.get('expression').node; };
exports.transformJSXExpressionContainer = transformJSXExpressionContainer;
/**
 * Transform JSXSpreadChild
 * @param path JSXSpreadChild
 * @returns SpreadElement
 */
var transformJSXSpreadChild = function (path) { return t.spreadElement(path.get('expression').node); };
exports.transformJSXSpreadChild = transformJSXSpreadChild;
var walksScope = function (path, name, slotFlag) {
    if (path.scope.hasBinding(name) && path.parentPath) {
        if (t.isJSXElement(path.parentPath.node)) {
            path.parentPath.setData('slotFlag', slotFlag);
        }
        walksScope(path.parentPath, name, slotFlag);
    }
};
exports.walksScope = walksScope;
var createInsertName = function (path, name) {
    if (path.scope.hasBinding(name)) {
        return createInsertName(path, "_" + name);
    }
    return t.identifier(name);
};
var buildIIFE = function (path, children) {
    var parentPath = path.parentPath;
    if (t.isAssignmentExpression(parentPath)) {
        var left_1 = parentPath.node.left;
        if (t.isIdentifier(left_1)) {
            return children.map(function (child) {
                if (t.isIdentifier(child) && child.name === left_1.name) {
                    var insertName = createInsertName(parentPath, "_" + child.name);
                    parentPath.insertBefore(t.variableDeclaration('const', [
                        t.variableDeclarator(insertName, t.callExpression(t.functionExpression(null, [], t.blockStatement([t.returnStatement(child)])), [])),
                    ]));
                    return insertName;
                }
                return child;
            });
        }
    }
    return children;
};
exports.buildIIFE = buildIIFE;
