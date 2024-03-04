
/**
 * 归并排序
 * @param nums
 * @returns
 *
 * 时间： O(nlogn)
 * 空间： O(n)
 */

// 纯逻辑写法
export function mergeSort(nums: number[]): number[] {
  const len = nums.length;
  if (len <= 1) return nums;

  function recusive(nums: number[], left: number, right: number): number[] {
    if (right - left === 0) return nums;
    const mid = left + ((right - left) >> 1);
    recusive(nums, left, mid);
    recusive(nums, mid + 1, right);
    return merge(nums, left, mid, right);
  }

  function merge(nums: number[], left: number, mid: number, right: number) {
    let pl = left, pr = mid+1, tmp: number[] = [], i = 0;

    while(pl <= mid && pr <= right) {
      tmp[i++] = nums[pl] < nums[pr] ? nums[pl++] : nums[pr++];
    }
    while(pl <= mid) tmp[i++] = nums[pl++];
    while(pr <= right) tmp[i++] = nums[pr++];

    tmp.forEach((num, idx) => {
      nums[left+idx] = num;
    });
    return nums;
  }

  return recusive(nums, 0, len - 1);
}

/**
 * javascript 下最简单写法
 *
 * 时间 O(nlogn)
 * 空间 O(nlogn)
 * @param nums
 * @returns
 */
export function mergeSort2(nums: number[]): number[] {
  const len = nums.length;
  if (len <= 1) return nums;
  const mid = len >> 1;
  const left: number[] = mergeSort(nums.slice(0, mid));
  const right: number[] = mergeSort(nums.slice(mid, len));

  const mergeNums: number[] = [];
  while(left.length > 0 && right.length > 0) {
    const num: number | undefined = left[0] < right[0] ? left.shift() : right.shift()
    num !== undefined && mergeNums.push(num);
  }
  return mergeNums.concat(left, right);
}
