/**
 *
 * @param len len in [1, 11]
 * @param prefix
 * @returns String
 */
export default function randomStr(len: number, prefix?: string) {
  const end = 0 < len && len < 12 ? len + 2 : 13;
  const str = Math.random().toString(32).slice(2, end);
  return prefix ? prefix + '-' + str : str;
}