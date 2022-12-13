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
import { Row } from '../Row';
export var TBody = function (_a) {
    var results = _a.results, pageIndex = _a.pageIndex, headers = _a.headers, scrollH = _a.scrollH, sortBy = _a.sortBy;
    var scrollStyle = {
        maxHeight: "".concat(scrollH, "px"),
        display: 'block',
        overflowY: 'scroll'
    };
    return (_jsx("tbody", __assign({ style: scrollH ? scrollStyle : {} }, { children: results[pageIndex].map(function (employee, index) { return (_jsx(Row, { data: employee, headers: headers, scrollH: scrollH, sortBy: sortBy }, "row-".concat(index))); }) })));
};
