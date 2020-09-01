/** 42.连续子数组的最大和
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
/**
 * 复杂度分析：
 * 时间复杂度 O(N)： 线性遍历数组 nums 即可获得结果，使用 O(N) 时间。
 * 空间复杂度 O(1)： 使用常数大小的额外空间。
 */
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));