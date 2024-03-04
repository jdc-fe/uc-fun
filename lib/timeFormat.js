"use strict";
exports.__esModule = true;
exports["default"] = (function (rowDate, fmt) {
    if (!rowDate || !fmt)
        return fmt;
    var date = new Date(rowDate);
    if (date.toString() === 'Invalid Date') {
        return fmt;
    }
    date.setHours(date.getHours() + 8);
    var _a = date.toISOString().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/), YYYY = _a[1], MM = _a[2], DD = _a[3], HH = _a[4], mm = _a[5], ss = _a[6];
    return fmt.replace('YYYY', YYYY)
        .replace('YY', YYYY.slice(-2))
        .replace('MM', MM)
        .replace('DD', DD)
        .replace('HH', HH)
        .replace('mm', mm)
        .replace('ss', ss);
});
