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
import { jsxs as _jsxs } from "react/jsx-runtime";
export var Breadcrumb = function (_a) {
    var resultsLength = _a.resultsLength, currentIndex = _a.currentIndex, entriesPerPage = _a.entriesPerPage;
    var to = entriesPerPage * (currentIndex + 1) > resultsLength
        ? resultsLength
        : entriesPerPage * (currentIndex + 1);
    var from = to - entriesPerPage < 0 ? 1 : to - entriesPerPage + 1;
    return (_jsxs("p", __assign({ "data-testid": "location" }, { children: ["Show ", from, " to ", to, " of ", resultsLength, " entries"] })));
};
