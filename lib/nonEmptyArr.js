"use strict";
exports.__esModule = true;
var getType_1 = require("./getType");
exports["default"] = (function (arr) { return ((0, getType_1["default"])(arr) === 'Array' && arr.length > 0); });
