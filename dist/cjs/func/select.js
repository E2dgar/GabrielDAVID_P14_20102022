"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showEntries = void 0;
var showEntries = function (number, data, paginate) {
    var pagesTable = [];
    if (!paginate) {
        pagesTable.push(data);
    }
    else {
        for (var i = 0; i < data.length; i += number) {
            pagesTable.push(data.slice(i, i + number));
        }
    }
    return pagesTable;
};
exports.showEntries = showEntries;
