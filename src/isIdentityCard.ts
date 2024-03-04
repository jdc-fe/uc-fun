/**
 * 匹配所有身份证号
 * 身份证校验码计算规则 https://baike.baidu.com/item/%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%A0%A1%E9%AA%8C%E7%A0%81/3800388
 * @param {Number|String}  number 身份证号
 * /d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/ 15位身份证号
 * /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/ 18位身份证号
 *
 * @example https://any86.github.io/any-rule/ 常用正则大全
 *  isIdentityCard('622001790122123')
 *  => true
 *
 *  isIdentityCard(610124199810283999)
 *  => true
 *
 *  isIdentityCard('34052419800101001X')
 *   => true
 */

export default number => {
  const strNumber = String(number);
  const regex = /\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$|^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/;
  const monthStartPos = strNumber.length === 15 ? 8 : 10;
  const year = Number(strNumber.slice(6, monthStartPos));
  const month = Number(strNumber.slice(monthStartPos, monthStartPos + 2));
  const day = Number(strNumber.slice(monthStartPos + 2, monthStartPos + 4));
  // 判断闰年与平年的2月特殊情况
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    if (month === 2 && day > 29) return false;
  } else if (month === 2 && day > 28) return false;

  // 针对长度为18位身份证号，验证身份证校验码（第18位为校验码）
  if (regex.test(strNumber) && strNumber.length === 18) {
    const coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const remainderMatch = {
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
    let remainder = 0;
    coefficient.forEach((item, index) => {
      remainder += item * strNumber[index];
    });
    return remainderMatch[remainder % 11] === strNumber[17].toUpperCase();
  }

  return regex.test(strNumber);
};
