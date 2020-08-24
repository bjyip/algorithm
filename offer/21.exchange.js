// 21.调整数组顺序使奇数位于偶数前面

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  var i = 0, j = nums.length - 1;
  while (i < j) {
    while (i < j && (nums[i] & 1) === 1) i++;
    while (i < j && (nums[j] & 1) === 0) j--;
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  return nums;
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： N 为数组 nums 长度，双指针 i, j 共同遍历整个数组。
 * 空间复杂度 O(1) ： 双指针 i, j 使用常数大小的额外空间。
 */

console.log(exchange([1,2,3,4]))