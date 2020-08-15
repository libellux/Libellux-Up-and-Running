"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_syntax_jsx_1 = __importDefault(require("@babel/plugin-syntax-jsx"));
var transform_vue_jsx_1 = __importDefault(require("./transform-vue-jsx"));
var sugar_fragment_1 = __importDefault(require("./sugar-fragment"));
exports.default = (function () { return ({
    name: 'babel-plugin-jsx',
    inherits: plugin_syntax_jsx_1.default,
    visitor: __assign(__assign({}, transform_vue_jsx_1.default()), sugar_fragment_1.default()),
}); });
