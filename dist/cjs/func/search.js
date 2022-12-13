"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchingData = void 0;
var searchingData = function (term, data, entries) {
    var searchedTerms = term.split(' ');
    var results = data;
    if (term.split('').shift() === ' ') {
        return data;
    }
    /**
     * Convert values in object into string
     * @param object
     * @returns
     */
    var objectToStringLowerCase = function (object) {
        return JSON.stringify(object).toLowerCase();
    };
    var _loop_1 = function (elt) {
        results = results.filter(function (employee) {
            return objectToStringLowerCase(Object.values(employee)).includes(elt.toLowerCase());
        });
    };
    for (var _i = 0, searchedTerms_1 = searchedTerms; _i < searchedTerms_1.length; _i++) {
        var elt = searchedTerms_1[_i];
        _loop_1(elt);
    }
    // results = showEntries(entries, results);
    return results;
};
exports.searchingData = searchingData;
