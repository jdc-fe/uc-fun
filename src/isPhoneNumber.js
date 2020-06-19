/**
 * 匹配所有手机号
 * @param {Number|String}  number 手机号
 *
 * @example
 *  isPhoneNumber(18202972982)
 *  => true
 *
 *  isPhoneNumber('+8618202972982')
 *  => true
 *
 *  isPhoneNumber('11')
 *   => false
 */

export default number => {
  const regex = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
  return regex.test(String(number));
};
