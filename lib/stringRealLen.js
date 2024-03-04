"use strict";
exports.__esModule = true;
var getType_1 = require("./getType");
exports["default"] = (function (str) {
    if ((0, getType_1["default"])(str) !== 'String')
        return 0;
    return str.replace(/[\u4e00-\u9fa5]/g, 'ss').length;
});
