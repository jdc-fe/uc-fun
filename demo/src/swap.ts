/**
 * 交换数组里两个数字
 * @param nums origin number list
 * @param i
 * @param j
 * @returns
 */
export default function swap(nums: number[], i: number, j: number): number[] {
  if (i === j) return;
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}