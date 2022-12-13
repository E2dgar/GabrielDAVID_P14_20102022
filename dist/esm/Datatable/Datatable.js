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
import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Search } from '../Search';
import './index.css';
import { Select } from '../Select';
import { searchingData } from '../func/search';
import { showEntries } from '../func/select';
import { Pagination } from '../Pagination';
import { Breadcrumb } from '../Breadcrumb';
import { TBody } from '../TBody';
export var Datatable = function (_a) {
    var headers = _a.headers, employees = _a.employees, paginate = _a.paginate, options = _a.options, scrollH = _a.scrollH;
    var _b = useState([]), results = _b[0], setResults = _b[1];
    var _c = useState(0), pageIndex = _c[0], setPageIndex = _c[1];
    var _d = useState(''), searchedTerms = _d[0], setSearchedTerms = _d[1];
    var _e = useState(10), entriesPerPage = _e[0], setEntriesPerPage = _e[1];
    var _f = useState(''), sortBy = _f[0], setSortBy = _f[1];
    useEffect(function () {
        setResults(showEntries(entriesPerPage, employees, !!paginate));
    }, []);
    useEffect(function () {
        setResults(showEntries(entriesPerPage, searchingData(searchedTerms, employees), !!paginate));
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
    return (_jsxs("div", __assign({ className: "table-container" }, { children: [_jsxs("div", __assign({ className: "select-search-bar" }, { children: [paginate && (_jsx(Select, { options: options, setEntriesPerPage: setEntriesPerPage, setPageIndex: setPageIndex, currentPageIndex: pageIndex, results: results, setResults: setResults, resultsLength: results.flat().length, paginate: true })), _jsx(Search, { onChange: handleSearch })] })), _jsxs("table", __assign({ "data-testid": "datatable", className: "datatable" }, { children: [_jsx(Header, { headers: headers, results: results, setResults: setResults, setSortBy: setSortBy, entriesPerPage: entriesPerPage, paginate: !!paginate, scrollH: scrollH }), results[0] && (_jsx(TBody, { results: results, headers: headers, pageIndex: pageIndex, scrollH: scrollH, sortBy: sortBy }))] })), _jsxs("div", __assign({ className: "entries-pagination-container" }, { children: [_jsx(Breadcrumb, { resultsLength: results.flat().length, currentIndex: pageIndex, entriesPerPage: entriesPerPage }), paginate && (_jsx(Pagination, { results: results, navigate: paginationNavigate, currentIndex: pageIndex }))] }))] })));
};
