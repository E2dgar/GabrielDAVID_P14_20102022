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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
import { useState } from 'react';
import { showEntries } from '../func/select';
export var Select = function (_a) {
    var options = _a.options, setEntriesPerPage = _a.setEntriesPerPage, setPageIndex = _a.setPageIndex, setResults = _a.setResults, results = _a.results, currentPageIndex = _a.currentPageIndex, resultsLength = _a.resultsLength, paginate = _a.paginate;
    var _b = useState(options === null || options === void 0 ? void 0 : options[0].value.toString()), selected = _b[0], setSelected = _b[1];
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
        setResults(showEntries(parseInt(e.currentTarget.value), results.flat(), paginate));
        setPageIndex(newPageIndex);
        console.log('index', newPageIndex);
        setEntriesPerPage(entriesNumber);
    };
    return (_jsxs("label", { children: ["Show", _jsx("select", __assign({ "data-testid": "select", className: "entries-select", value: selected, onChange: handleChange }, { children: options === null || options === void 0 ? void 0 : options.map(function (option) { return (_jsx("option", __assign({ "data-testid": "select-option", id: "option-".concat(option.value) }, { children: option.text }), "option-".concat(option.value))); }) })), "entries"] }));
};
