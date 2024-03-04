"use strict";
exports.__esModule = true;
exports["default"] = (function (duration) { return new Promise(function (resolve) {
    setTimeout(function () {
        resolve();
    }, duration);
}); });
