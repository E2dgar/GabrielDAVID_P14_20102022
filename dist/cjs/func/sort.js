"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
var sort = function (data, sortBy) {
    var sortedArray = __spreadArray([], data, true);
    return sortedArray.sort(function (a, b) { return a[sortBy].localeCompare(b[sortBy]); });
};
exports.sort = sort;
