"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Search = function (_a) {
    var onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsxs)("label", { children: ["Search:", ' ', (0, jsx_runtime_1.jsx)("input", { "data-testid": "searchBox", type: "search", onChange: onChange })] }));
};
exports.Search = Search;
