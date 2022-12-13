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
exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
var react_1 = require("react");
var select_1 = require("../func/select");
var Select = function (_a) {
    var options = _a.options, setEntriesPerPage = _a.setEntriesPerPage, setPageIndex = _a.setPageIndex, setResults = _a.setResults, results = _a.results, currentPageIndex = _a.currentPageIndex, resultsLength = _a.resultsLength, paginate = _a.paginate;
    var _b = (0, react_1.useState)(options === null || options === void 0 ? void 0 : options[0].value.toString()), selected = _b[0], setSelected = _b[1];
    var handleChange = function (e) {
        var firstRowIndex = 0;
        var newPageIndex = 0;
        var entriesNumber = parseInt(e.currentTarget.value);
        var numberOfPages = resultsLength / entriesNumber;
        /**Get the index of firstrow to set new page index that display this entry */
        if (selected) {
            firstRowIndex = currentPageIndex * parseInt(selected) + 1;
        }
        for (var i = 1; i < numberOfPages; i++) {
            if (firstRowIndex > i * entriesNumber) {
                newPageIndex = i - 1;
            }
        }
        setSelected(e.currentTarget.value);
        setResults((0, select_1.showEntries)(parseInt(e.currentTarget.value), results.flat(), paginate));
        setPageIndex(newPageIndex);
        console.log('index', newPageIndex);
        setEntriesPerPage(entriesNumber);
    };
    return ((0, jsx_runtime_1.jsxs)("label", { children: ["Show", (0, jsx_runtime_1.jsx)("select", __assign({ "data-testid": "select", className: "entries-select", value: selected, onChange: handleChange }, { children: options === null || options === void 0 ? void 0 : options.map(function (option) { return ((0, jsx_runtime_1.jsx)("option", __assign({ "data-testid": "select-option", id: "option-".concat(option.value) }, { children: option.text }), "option-".concat(option.value))); }) })), "entries"] }));
};
exports.Select = Select;
