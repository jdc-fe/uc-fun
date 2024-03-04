"use strict";
exports.__esModule = true;
function linearScale(from, to) {
    var min = from[0], max = from[1];
    var times = (to[1] - to[0]) / (max - min);
    return function (num) {
        if (num <= min)
            return to[0];
        if (num >= max)
            return to[1];
        return to[0] + (Math.min(max, num) - min) * times;
    };
}
exports["default"] = linearScale;
