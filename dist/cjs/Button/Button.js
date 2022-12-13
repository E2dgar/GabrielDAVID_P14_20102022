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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
var Button = function (_a) {
    var index = _a.index, navigate = _a.navigate, className = _a.className;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ className: className, onClick: navigate, "data-index": index, "data-testid": "pagination-button" }, { children: index + 1 })));
};
exports.Button = Button;
