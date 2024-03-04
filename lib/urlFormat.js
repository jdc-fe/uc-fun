"use strict";
exports.__esModule = true;
var getType_1 = require("./getType");
exports["default"] = (function (url) {
    if (!url)
        return {};
    if ((0, getType_1["default"])(url) !== 'String') {
        throw new Error('the param of urlFormat must be string');
    }
    var pos = url.indexOf('?');
    if (pos === -1)
        return {};
    var urlSearch = url.substr(pos + 1);
    var urlObj = new URLSearchParams(urlSearch);
    return urlObj;
});
