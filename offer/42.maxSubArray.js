/** 42.连续子数组的最大和
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray = function(nums) {
  var max = nums[0], pre = 0, cur = 0;
  for (var i = 0; i < nums.length; i++) {
    cur = nums[i];
    cur += Math.max(pre, 0);
    max = Math.max(max, cur);
    pre = cur;
  }
  return max;
};

var maxSubArray = function(nums) {
  var res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0)
    res = Math.max(res, nums[i])
  }
  return res
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N)： 线性遍历数组 nums 即可获得结果，使用 O(N) 时间。
 * 空间复杂度 O(1)： 使用常数大小的额外空间。
 */
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));