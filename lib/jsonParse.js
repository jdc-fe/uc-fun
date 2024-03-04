"use strict";
exports.__esModule = true;
exports["default"] = (function (str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return '';
    }
});
