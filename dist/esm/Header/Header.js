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
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { sort } from '../func/sort';
import { showEntries } from '../func/select';
export var Header = function (_a) {
    var headers = _a.headers, results = _a.results, setResults = _a.setResults, entriesPerPage = _a.entriesPerPage, paginate = _a.paginate, scrollH = _a.scrollH, setSortBy = _a.setSortBy;
    var refs = useRef(new Array(headers.length));
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
            setResults(showEntries(entriesPerPage, sort(results.flat(), newSortBy.getAttribute('data-column')), paginate));
            newSortBy.setAttribute('data-sort', 'ASC');
        }
        else {
            newSortBy.setAttribute('data-sort', 'DESC');
            setResults(showEntries(entriesPerPage, results.flat().reverse(), paginate));
        }
    };
    return (_jsx("thead", __assign({ "data-testid": "datatable-headers", style: thStyle }, { children: _jsx("tr", { children: headers.map(function (header, i) { return (_jsx("th", __assign({ ref: function (elt) { return (refs.current[i] = elt); }, "data-column": header.key, onClick: function () { return handleClick(i); }, "data-testid": "header" }, { children: header.label }), "header-".concat(i))); }) }) })));
};
