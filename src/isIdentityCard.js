/**
 * 匹配所有身份证号
 * @param {Number|String}  number 身份证号
 * /d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/ 15位身份证号
 * /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/ 18位身份证号
 *
 * @example https://any86.github.io/any-rule/ 常用正则大全
 *  isIdentityCard('61012419970228377x')
 *  => true
 *
 *  isIdentityCard(610124202002293777)
 *  => true
 *
 *  isIdentityCard(610124202002303777)
 *   => false
 */

export default number => {
  const strNumber = String(number);
  const regex = /\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$|^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/;
  let monthStartPos = strNumber.length === 15 ? 8 : 10;
  const year = Number(strNumber.slice(6, monthStartPos));
  const month = Number(strNumber.slice(monthStartPos, monthStartPos + 2));
  const day = Number(strNumber.slice(monthStartPos + 2, monthStartPos + 4));
  // 判断闰年与平年的2月特殊情况
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    if (month === 2 && day > 29) return false;
  } else {
    if (month === 2 && day > 28) return false;
  }

  return regex.test(strNumber);
};
