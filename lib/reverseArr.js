"use strict";
exports.__esModule = true;
var getType_1 = require("./getType");
var nonEmptyArr_1 = require("./nonEmptyArr");
exports["default"] = (function (arr, handler) {
    if (!(0, nonEmptyArr_1["default"])(arr))
        return [];
    var len = arr.length - 1;
    var result = [];
    if ((0, getType_1["default"])(handler) === 'Function') {
        for (var i = len; i >= 0; i--) {
            result.push(handler(arr[i], i));
        }
    }
    else {
        for (var i = len; i >= 0; i--) {
            result.push(arr[i]);
        }
    }
    return result;
});
