"use strict";
exports.__esModule = true;
var stringRealLen_1 = require("./stringRealLen");
var getType_1 = require("./getType");
var isBigger_1 = require("./isBigger");
exports["default"] = (function (str, len) {
    if ((0, getType_1["default"])(str) !== 'String')
        return '';
    if (!(0, isBigger_1["default"])((0, stringRealLen_1["default"])(str), len))
        return str;
    var counter = 0;
    while (counter <= len) {
        counter += 1;
        var curStr = str.substr(0, counter);
        var curLen = (0, stringRealLen_1["default"])(curStr);
        if (curLen > len)
            return "".concat(curStr.substr(0, counter - 1), "...");
    }
});
