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
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var sort_1 = require("../func/sort");
var select_1 = require("../func/select");
var Header = function (_a) {
    var headers = _a.headers, results = _a.results, setResults = _a.setResults, entriesPerPage = _a.entriesPerPage, paginate = _a.paginate, scrollH = _a.scrollH, setSortBy = _a.setSortBy;
    var refs = (0, react_1.useRef)(new Array(headers.length));
    var thStyle = scrollH
        ? {
            display: 'table',
            width: 'calc(100% - 1em)',
            tableLayout: 'fixed'
        }
        : {};
    var handleClick = function (i) {
        var currentSortBy = refs.current.filter(function (elt) {
            return elt.getAttribute('data-sort');
        });
        var newSortBy = refs.current[i];
        setSortBy(newSortBy.getAttribute('data-column'));
        if (currentSortBy[0] && currentSortBy[0] !== newSortBy) {
            currentSortBy[0].removeAttribute('data-sort');
        }
        var sortOrder = newSortBy.getAttribute('data-sort');
        if (!sortOrder || sortOrder === 'DESC') {
            setResults((0, select_1.showEntries)(entriesPerPage, (0, sort_1.sort)(results.flat(), newSortBy.getAttribute('data-column')), paginate));
            newSortBy.setAttribute('data-sort', 'ASC');
        }
        else {
            newSortBy.setAttribute('data-sort', 'DESC');
            setResults((0, select_1.showEntries)(entriesPerPage, results.flat().reverse(), paginate));
        }
    };
    return ((0, jsx_runtime_1.jsx)("thead", __assign({ "data-testid": "datatable-headers", style: thStyle }, { children: (0, jsx_runtime_1.jsx)("tr", { children: headers.map(function (header, i) { return ((0, jsx_runtime_1.jsx)("th", __assign({ ref: function (elt) { return (refs.current[i] = elt); }, "data-column": header.key, onClick: function () { return handleClick(i); }, "data-testid": "header" }, { children: header.label }), "header-".concat(i))); }) }) })));
};
exports.Header = Header;
