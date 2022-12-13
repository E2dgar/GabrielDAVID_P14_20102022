import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var Search = function (_a) {
    var onChange = _a.onChange;
    return (_jsxs("label", { children: ["Search:", ' ', _jsx("input", { "data-testid": "searchBox", type: "search", onChange: onChange })] }));
};
