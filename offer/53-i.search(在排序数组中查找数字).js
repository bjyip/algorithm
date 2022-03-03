/**
 * 53 - I. 在排序数组中查找数字
 * 统计一个数字在排序数组中出现的次数。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法
var helper = function(nums, target) {
  var i = 0, j = nums.length - 1;
  while (i <= j) {
    var m = Math.floor((i + j) / 2);
    if (nums[m] <= target) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  return i;
}
var search = function(nums, target) {
 return helper(nums, target) - helper(nums, target - 1);
};
console.log(search([5,7,7,8,8,8,10], 8))