"use strict";
exports.__esModule = true;
exports["default"] = (function (number) {
    var strNumber = String(number);
    var regex = /\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$|^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/;
    var monthStartPos = strNumber.length === 15 ? 8 : 10;
    var year = Number(strNumber.slice(6, monthStartPos));
    var month = Number(strNumber.slice(monthStartPos, monthStartPos + 2));
    var day = Number(strNumber.slice(monthStartPos + 2, monthStartPos + 4));
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        if (month === 2 && day > 29)
            return false;
    }
    else if (month === 2 && day > 28)
        return false;
    if (regex.test(strNumber) && strNumber.length === 18) {
        var coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var remainderMatch = {
            0: '1',
            1: '0',
            2: 'X',
            3: '9',
            4: '8',
            5: '7',
            6: '6',
            7: '5',
            8: '4',
            9: '3',
            10: '2'
        };
        var remainder_1 = 0;
        coefficient.forEach(function (item, index) {
            var num = Number(strNumber[index]);
            remainder_1 += item * num;
        });
        var remainderStr = remainderMatch[remainder_1 % 11];
        return remainderStr === strNumber[17].toUpperCase();
    }
    return regex.test(strNumber);
});
