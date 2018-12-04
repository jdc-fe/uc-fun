/**
 * format type by fmt
 * @param {Date|String|number}  rowDate [date instance|date string|timestamp]
 * @param {String}  fmt eg:YYYY-MM-DD HH:mm:ss
 * @return {String} formated date
 *
 * @example
 *  timeformat('2018-10-10 10:30:20', 'MM/DD HH:mm)
 *  // => 10/10 10:30
 *
 *  const date = new Date('2018-10-10 10:30:20')
 *  timeformat(date, 'MM/DD HH:mm)
 *  // => 10/10 10:30
 *
 *  const date = new Date('2018-10-10 10:30:20')
 *  timeformat(date.getTime(), 'MM/DD HH:mm)
 *  // => 10/10 10:30
 *
 */
export default (rowDate, fmt) => {
  if (!rowDate || !fmt) return fmt;
  // get correct date
  const date = new Date(rowDate);

  if (date.toString() === 'Invalid Date') {
    return fmt;
  }

  date.setHours(date.getHours() + 8);
  const [, YYYY, MM, DD, HH, mm, ss] = date.toISOString().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  return fmt.replace('YYYY', YYYY)
    .replace('YY', YYYY.slice(-2))
    .replace('MM', MM)
    .replace('DD', DD)
    .replace('HH', HH)
    .replace('mm', mm)
    .replace('ss', ss);
};
