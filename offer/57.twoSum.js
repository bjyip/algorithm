/**
 * 57.和为s的两个数字
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双指针
var twoSum = function(nums, target) {
  var l = 0, r = nums.length - 1, s = 0;
  while (l < r) {
    s = nums[l] + nums[r];
    if (s < target) {
      l++;
    } else if (s > target) {
      r--;
    } else {
      return [nums[l], nums[r]];
    }
  }
  return null
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： N 为数组 nums 的长度；双指针共同线性遍历整个数组。
 * 空间复杂度 O(1) ： 变量 i, j 使用常数大小的额外空间。
 */
console.log(twoSum([2, 7, 11, 15], 9))