/**
 *  check num is number then compare to standard
 * @param {number} num need to be compared number
 * @param {number} standard the number compared with
 */
export const isBigger = (num, standard) => {
  if (Number.isNaN(Number(num)) || Number.isNaN(Number(standard))) {
    throw new Error('the params of isBigger must be like number');
  }
  return Number(num) > Number(standard);
}