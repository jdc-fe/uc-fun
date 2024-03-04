"use strict";
exports.__esModule = true;
exports["default"] = (function (str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
});
