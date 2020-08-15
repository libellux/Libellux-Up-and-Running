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
var t = __importStar(require("@babel/types"));
var helper_module_imports_1 = require("@babel/helper-module-imports");
var utils_1 = require("./utils");
var parseDirectives_1 = __importDefault(require("./parseDirectives"));
var transform_vue_jsx_1 = require("./transform-vue-jsx");
var xlinkRE = /^xlink([A-Z])/;
var onRE = /^on[^a-z]/;
var isOn = function (key) { return onRE.test(key); };
var getJSXAttributeValue = function (path, state) {
    var valuePath = path.get('value');
    if (valuePath.isJSXElement()) {
        return transform_vue_jsx_1.transformJSXElement(valuePath, state);
    }
    if (valuePath.isStringLiteral()) {
        return valuePath.node;
    }
    if (valuePath.isJSXExpressionContainer()) {
        return utils_1.transformJSXExpressionContainer(valuePath);
    }
    return null;
};
var transformJSXSpreadAttribute = function (nodePath, path, mergeArgs) {
    var argument = path.get('argument');
    var properties = argument.node.properties;
    if (!properties) {
        if (argument.isIdentifier()) {
            utils_1.walksScope(nodePath, argument.node.name, 2 /* DYNAMIC */);
        }
        mergeArgs.push(argument.node);
    }
    else {
        mergeArgs.push(t.objectExpression(properties));
    }
};
var mergeAsArray = function (existing, incoming) {
    if (t.isArrayExpression(existing.value)) {
        existing.value.elements.push(incoming.value);
    }
    else {
        existing.value = t.arrayExpression([
            existing.value,
            incoming.value,
        ]);
    }
};
var dedupeProperties = function (properties) {
    if (properties === void 0) { properties = []; }
    var knownProps = new Map();
    var deduped = [];
    properties.forEach(function (prop) {
        var name = prop.key.value;
        var existing = knownProps.get(name);
        if (existing) {
            if (name === 'style' || name === 'class' || name.startsWith('on')) {
                mergeAsArray(existing, prop);
            }
        }
        else {
            knownProps.set(name, prop);
            deduped.push(prop);
        }
    });
    return deduped;
};
/**
 *  Check if an attribute value is constant
 * @param node
 * @returns boolean
 */
var isConstant = function (node) {
    if (t.isIdentifier(node)) {
        return node.name === 'undefined';
    }
    if (t.isArrayExpression(node)) {
        var elements = node.elements;
        return elements.every(function (element) { return element && isConstant(element); });
    }
    if (t.isObjectExpression(node)) {
        return node.properties.every(function (property) { return isConstant(property.value); });
    }
    if (t.isLiteral(node)) {
        return true;
    }
    return false;
};
var buildProps = function (path, state) {
    var tag = utils_1.getTag(path, state);
    var isComponent = utils_1.checkIsComponent(path.get('openingElement'));
    var props = path.get('openingElement').get('attributes');
    var directives = [];
    var dynamicPropNames = new Set();
    var slots = null;
    var patchFlag = 0;
    if (props.length === 0) {
        return {
            tag: tag,
            isComponent: isComponent,
            slots: slots,
            props: t.nullLiteral(),
            directives: directives,
            patchFlag: patchFlag,
            dynamicPropNames: dynamicPropNames,
        };
    }
    var properties = [];
    // patchFlag analysis
    var hasRef = false;
    var hasClassBinding = false;
    var hasStyleBinding = false;
    var hasHydrationEventBinding = false;
    var hasDynamicKeys = false;
    var mergeArgs = [];
    props
        .forEach(function (prop) {
        var _a;
        if (prop.isJSXAttribute()) {
            var name_1 = utils_1.getJSXAttributeName(prop);
            var attributeValue = getJSXAttributeValue(prop, state);
            if (!isConstant(attributeValue) || name_1 === 'ref') {
                if (!isComponent
                    && isOn(name_1)
                    // omit the flag for click handlers becaues hydration gives click
                    // dedicated fast path.
                    && name_1.toLowerCase() !== 'onclick'
                    // omit v-model handlers
                    && name_1 !== 'onUpdate:modelValue') {
                    hasHydrationEventBinding = true;
                }
                if (name_1 === 'ref') {
                    hasRef = true;
                }
                else if (name_1 === 'class' && !isComponent) {
                    hasClassBinding = true;
                }
                else if (name_1 === 'style' && !isComponent) {
                    hasStyleBinding = true;
                }
                else if (name_1 !== 'key'
                    && !utils_1.isDirective(name_1)
                    && name_1 !== 'on') {
                    dynamicPropNames.add(name_1);
                }
            }
            if (state.opts.transformOn && (name_1 === 'on' || name_1 === 'nativeOn')) {
                if (!state.get('transformOn')) {
                    state.set('transformOn', helper_module_imports_1.addDefault(path, '@ant-design-vue/babel-helper-vue-transform-on', { nameHint: '_transformOn' }));
                }
                mergeArgs.push(t.callExpression(state.get('transformOn'), [attributeValue || t.booleanLiteral(true)]));
                return;
            }
            if (utils_1.isDirective(name_1)) {
                var _b = parseDirectives_1.default({
                    tag: tag,
                    isComponent: isComponent,
                    name: name_1,
                    path: prop,
                    state: state,
                    value: attributeValue,
                }), directive = _b.directive, modifiers = _b.modifiers, value = _b.value, arg = _b.arg, directiveName = _b.directiveName;
                var argVal = (_a = arg) === null || _a === void 0 ? void 0 : _a.value;
                var propName = argVal || 'modelValue';
                if (directiveName === 'slots') {
                    slots = attributeValue;
                    return;
                }
                if (directive) {
                    directives.push(t.arrayExpression(directive));
                }
                else if (directiveName === 'model') {
                    // must be v-model and is a component
                    properties.push(t.objectProperty(arg || t.stringLiteral('modelValue'), 
                    // @ts-ignore
                    value));
                    dynamicPropNames.add(propName);
                    if (modifiers.size) {
                        properties.push(t.objectProperty(t.stringLiteral((argVal || 'model') + "Modifiers"), t.objectExpression(__spread(modifiers).map(function (modifier) { return (t.objectProperty(t.stringLiteral(modifier), t.booleanLiteral(true))); }))));
                    }
                }
                else if (directiveName === 'html') {
                    properties.push(t.objectProperty(t.stringLiteral('innerHTML'), value));
                    dynamicPropNames.add('innerHTML');
                }
                else if (directiveName === 'text') {
                    properties.push(t.objectProperty(t.stringLiteral('textContent'), value));
                    dynamicPropNames.add('textContent');
                }
                if (directiveName === 'model' && value) {
                    properties.push(t.objectProperty(t.stringLiteral("onUpdate:" + propName), t.arrowFunctionExpression([t.identifier('$event')], 
                    // @ts-ignore
                    t.assignmentExpression('=', value, t.identifier('$event')))));
                    dynamicPropNames.add("onUpdate:" + propName);
                }
                return;
            }
            if (name_1.match(xlinkRE)) {
                name_1 = name_1.replace(xlinkRE, function (_, firstCharacter) { return "xlink:" + firstCharacter.toLowerCase(); });
            }
            properties.push(t.objectProperty(t.stringLiteral(name_1), attributeValue || t.booleanLiteral(true)));
        }
        else {
            // JSXSpreadAttribute
            hasDynamicKeys = true;
            transformJSXSpreadAttribute(path, prop, mergeArgs);
        }
    });
    // patchFlag analysis
    // tslint:disable: no-bitwise
    if (hasDynamicKeys) {
        patchFlag |= 16 /* FULL_PROPS */;
    }
    else {
        if (hasClassBinding) {
            patchFlag |= 2 /* CLASS */;
        }
        if (hasStyleBinding) {
            patchFlag |= 4 /* STYLE */;
        }
        if (dynamicPropNames.size) {
            patchFlag |= 8 /* PROPS */;
        }
        if (hasHydrationEventBinding) {
            patchFlag |= 32 /* HYDRATE_EVENTS */;
        }
    }
    if ((patchFlag === 0 || patchFlag === 32 /* HYDRATE_EVENTS */)
        && (hasRef || directives.length > 0)) {
        patchFlag |= 512 /* NEED_PATCH */;
    }
    var propsExpression = t.nullLiteral();
    if (mergeArgs.length) {
        if (properties.length) {
            mergeArgs.push.apply(mergeArgs, __spread(dedupeProperties(properties)));
        }
        if (mergeArgs.length > 1) {
            var exps_1 = [];
            var objectProperties_1 = [];
            mergeArgs.forEach(function (arg) {
                if (t.isIdentifier(arg) || t.isExpression(arg)) {
                    exps_1.push(arg);
                }
                else {
                    objectProperties_1.push(arg);
                }
            });
            propsExpression = t.callExpression(utils_1.createIdentifier(state, 'mergeProps'), __spread(exps_1, [
                !!objectProperties_1.length && t.objectExpression(objectProperties_1),
            ]).filter(Boolean));
        }
        else {
            // single no need for a mergeProps call
            propsExpression = mergeArgs[0];
        }
    }
    else if (properties.length) {
        propsExpression = t.objectExpression(dedupeProperties(properties));
    }
    return {
        tag: tag,
        props: propsExpression,
        isComponent: isComponent,
        slots: slots,
        directives: directives,
        patchFlag: patchFlag,
        dynamicPropNames: dynamicPropNames,
    };
};
exports.default = buildProps;
