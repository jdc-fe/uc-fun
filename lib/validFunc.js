"use strict";
exports.__esModule = true;
exports.validFunc = void 0;
var getType_1 = require("./getType");
var validFunc = function (func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return ((0, getType_1["default"])(func) === 'Function' && func.apply(void 0, args));
};
exports.validFunc = validFunc;
