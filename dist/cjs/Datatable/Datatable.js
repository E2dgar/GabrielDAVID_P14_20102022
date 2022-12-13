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
exports.Datatable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Header_1 = require("../Header");
var Search_1 = require("../Search");
require("./index.css");
var Select_1 = require("../Select");
var search_1 = require("../func/search");
var select_1 = require("../func/select");
var Pagination_1 = require("../Pagination");
var Breadcrumb_1 = require("../Breadcrumb");
var TBody_1 = require("../TBody");
var Datatable = function (_a) {
    var headers = _a.headers, employees = _a.employees, paginate = _a.paginate, options = _a.options, scrollH = _a.scrollH;
    var _b = (0, react_1.useState)([]), results = _b[0], setResults = _b[1];
    var _c = (0, react_1.useState)(0), pageIndex = _c[0], setPageIndex = _c[1];
    var _d = (0, react_1.useState)(''), searchedTerms = _d[0], setSearchedTerms = _d[1];
    var _e = (0, react_1.useState)(10), entriesPerPage = _e[0], setEntriesPerPage = _e[1];
    var _f = (0, react_1.useState)(''), sortBy = _f[0], setSortBy = _f[1];
    (0, react_1.useEffect)(function () {
        setResults((0, select_1.showEntries)(entriesPerPage, employees, !!paginate));
    }, []);
    (0, react_1.useEffect)(function () {
        setResults((0, select_1.showEntries)(entriesPerPage, (0, search_1.searchingData)(searchedTerms, employees), !!paginate));
    }, [searchedTerms]);
    var handleSearch = function (e) {
        setSearchedTerms(e.currentTarget.value);
    };
    var paginationNavigate = function (e) {
        var indexAttribute = e.currentTarget.getAttribute('data-index');
        if (indexAttribute) {
            setPageIndex(parseInt(indexAttribute));
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "table-container" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "select-search-bar" }, { children: [paginate && ((0, jsx_runtime_1.jsx)(Select_1.Select, { options: options, setEntriesPerPage: setEntriesPerPage, setPageIndex: setPageIndex, currentPageIndex: pageIndex, results: results, setResults: setResults, resultsLength: results.flat().length, paginate: true })), (0, jsx_runtime_1.jsx)(Search_1.Search, { onChange: handleSearch })] })), (0, jsx_runtime_1.jsxs)("table", __assign({ "data-testid": "datatable", className: "datatable" }, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { headers: headers, results: results, setResults: setResults, setSortBy: setSortBy, entriesPerPage: entriesPerPage, paginate: !!paginate, scrollH: scrollH }), results[0] && ((0, jsx_runtime_1.jsx)(TBody_1.TBody, { results: results, headers: headers, pageIndex: pageIndex, scrollH: scrollH, sortBy: sortBy }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "entries-pagination-container" }, { children: [(0, jsx_runtime_1.jsx)(Breadcrumb_1.Breadcrumb, { resultsLength: results.flat().length, currentIndex: pageIndex, entriesPerPage: entriesPerPage }), paginate && ((0, jsx_runtime_1.jsx)(Pagination_1.Pagination, { results: results, navigate: paginationNavigate, currentIndex: pageIndex }))] }))] })));
};
exports.Datatable = Datatable;
