"use strict";
exports.__esModule = true;
exports["default"] = (function (num, standard) {
    if (num === null
        || standard === null
        || Number.isNaN(Number(num))
        || Number.isNaN(Number(standard))) {
        return false;
    }
    return Number(num) > Number(standard);
});
