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
exports.Breadcrumb = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Breadcrumb = function (_a) {
    var resultsLength = _a.resultsLength, currentIndex = _a.currentIndex, entriesPerPage = _a.entriesPerPage;
    var to = entriesPerPage * (currentIndex + 1) > resultsLength
        ? resultsLength
        : entriesPerPage * (currentIndex + 1);
    var from = to - entriesPerPage < 0 ? 1 : to - entriesPerPage + 1;
    return ((0, jsx_runtime_1.jsxs)("p", __assign({ "data-testid": "location" }, { children: ["Show ", from, " to ", to, " of ", resultsLength, " entries"] })));
};
exports.Breadcrumb = Breadcrumb;
