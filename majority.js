// hash
// var majorityElement = function (nums) {
//   var hash = {};
//   for (i in nums) {
//     hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1
//   }
//   for (i in hash) {
//     if (hash[i] > (nums.length / 2)) {
//       return i;
//     }
//   }
// };

// sort
// var majorityElement = function (nums) {
//   nums.sort();
//   return nums[Math.floor(nums.length / 2)];
// }

// var countInRange = function(nums, num, lo, hi) {
//   var count = 0;
//   for (i = lo; i <= hi; i++) {
//     if (nums[i] === num) {
//       count++
//     }
//   }
//   return count;
// }
// var majorityElementRec = function(nums, lo, hi) {
//   // 基本事例；大小为1的数组中唯一的元素是众数。
//   if (lo === hi) {
//     return nums[lo];
//   }
//   // 在该切片的左右半部分递归
//   var mid = Math.floor((lo + hi) / 2);
//   var left = majorityElementRec(nums, lo, mid);
//   var right = majorityElementRec(nums, mid + 1, hi)
//   // 如果两半众数相同，则返回它。
//   if (left === right) {
//     return left;
//   }
//   // 否则，计算每个元素并返回“赢家”。
//   var leftCount = countInRange(nums, left, lo, hi);
//   var rightCount = countInRange(nums, right, lo, hi);

//   return leftCount > rightCount ? left : right;
// }
// // 分治
// var majorityElement = function (nums) {
//   return majorityElementRec(nums, 0, nums.length - 1);
// };

// 投票法
var majorityElement = function (nums) {
  var candidate = null, count = 0;
  for (var i in nums) {
      if (count === 0) {
          candidate = nums[i]
      }
      count += candidate === nums[i] ? + 1 : - 1
  }
  return candidate
}

console.log(majorityElement([3, 2, 3, 2, 1, 2, 2]))