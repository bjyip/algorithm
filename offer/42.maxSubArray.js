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
    // 小于0的不加
    cur += Math.max(pre, 0);
    // 目前累加的跟之前最大的和相比，取更大值
    max = Math.max(max, cur);
    pre = cur;
  }
  return max;
};









var maxSubArray = function(nums) {
  var max = nums[0], pre = nums[0], cur = 0
  for (let i = 1; i < nums.length; i++) {
    cur = nums[i]
    cur += Math.max(pre, 0)
    max = Math.max(cur, max)
    pre = cur
  }
  return max
}







var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0]
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    maxAns = Math.max(pre, maxAns)
  }
  return maxAns
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N)： 其中 n 为 nums 数组的长度。我们只需要遍历一遍数组即可求得答案。
 * 空间复杂度 O(1)： 我们只需要常数空间存放若干变量。
 */
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));