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
exports.Pagination = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("../Button");
require("./index.css");
var Pagination = function (_a) {
    var results = _a.results, navigate = _a.navigate, currentIndex = _a.currentIndex;
    var isButtonVisible = function (index) {
        return (index === 0 ||
            index === results.length - 1 ||
            (index > currentIndex - 3 && index < currentIndex + 3));
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ "data-testid": "pagination" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "next-prev", disabled: currentIndex === 0, "data-index": currentIndex - 1, onClick: navigate }, { children: "Previous" })), results.map(function (_, index) {
                return isButtonVisible(index) ? ((0, jsx_runtime_1.jsx)(Button_1.Button, { className: "pagination-button ".concat(currentIndex === index ? 'active' : ''), index: index, navigate: navigate }, index)) : isButtonVisible(index - 1) ? ('...') : null;
            }), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: navigate, className: "next-prev", disabled: currentIndex === results.length - 1, "data-index": currentIndex + 1 }, { children: "Next" }))] })));
};
exports.Pagination = Pagination;
