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
import './index.css';
export var Button = function (_a) {
    var index = _a.index, navigate = _a.navigate, className = _a.className;
    return (_jsx("button", __assign({ className: className, onClick: navigate, "data-index": index, "data-testid": "pagination-button" }, { children: index + 1 })));
};
