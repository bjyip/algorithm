/**
 * 0～n-1中缺失的数字
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var l = 0, r = nums.length - 1;
  while (l <= r) {
    var m = Math.floor((l + r) / 2);
    if (nums[m] === m) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return l;
};
/**
 * 复杂度分析:
 * 时间复杂度 O(logN)： 二分法为对数级别复杂度。
 * 空间复杂度 O(1)： 几个变量使用常数大小的额外空间。
 * 
 * 边界问题：
 * while循环中使用l<=r，然后返回l
 */

 console.log(missingNumber([0,1,2,3,4,5,6,7,9]))