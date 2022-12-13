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
export var Row = function (_a) {
    var data = _a.data, headers = _a.headers, scrollH = _a.scrollH, sortBy = _a.sortBy;
    var trStyle = scrollH
        ? {
            display: 'table',
            width: '100%',
            tableLayout: 'fixed'
        }
        : {};
    return (_jsx("tr", __assign({ "data-testid": "row", style: trStyle }, { children: headers.map(function (header, i) { return (_jsx("td", __assign({ className: sortBy === header.key ? 'sorted' : '', "data-testid": "row-".concat(i, "-td") }, { children: data[header.key] }), "row-key-".concat(i))); }) })));
};
