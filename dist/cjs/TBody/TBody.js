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
exports.TBody = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Row_1 = require("../Row");
var TBody = function (_a) {
    var results = _a.results, pageIndex = _a.pageIndex, headers = _a.headers, scrollH = _a.scrollH, sortBy = _a.sortBy;
    var scrollStyle = {
        maxHeight: "".concat(scrollH, "px"),
        display: 'block',
        overflowY: 'scroll'
    };
    return ((0, jsx_runtime_1.jsx)("tbody", __assign({ style: scrollH ? scrollStyle : {} }, { children: results[pageIndex].map(function (employee, index) { return ((0, jsx_runtime_1.jsx)(Row_1.Row, { data: employee, headers: headers, scrollH: scrollH, sortBy: sortBy }, "row-".concat(index))); }) })));
};
exports.TBody = TBody;
