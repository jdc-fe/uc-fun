/**
 * get data type string
 * @param {any} target
 * @return {String} data type
 *
 * @example
 *  getType({})
 *  // => 'Object'
 *
 * *  getType(1)
 *  // => 'Number'
 *
 */
export default target => (
  Object.prototype.toString.call(target).slice(8, -1)
);
