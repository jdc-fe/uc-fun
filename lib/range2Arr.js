"use strict";
exports.__esModule = true;
exports["default"] = (function (range) {
    if (range === void 0) { range = []; }
    if (!range)
        return [];
    if (!Array.isArray(range))
        return [];
    var length = range.length;
    if (length === 1)
        return Array(2).fill(range[0]);
    return range.slice(0, -1).map(function (item, index) { return [item, range[index + 1]]; });
});
