/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
// var majorityElement = function(nums) {
//   var newNums = quickSort(nums);
//   return newNums[Math.floor(newNums.length / 2)]
// };

// var quickSort = function(arr) {
//   if (arr.length <= 1) return arr;
//   var midIndex = Math.floor(arr.length / 2);
//   var mid = arr.splice(midIndex, 1)[0];
//   var left = [], right = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (mid > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(mid, quickSort(right));
// }

// hash
// var majorityElement = function(nums) {
//   var hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]]) {
//       hash[nums[i]]++;
//     } else {
//       hash[nums[i]] = 1
//     }
//     if (hash[nums[i]] > Math.floor(nums.length / 2)) return nums[i];
//   }
// };

// 投票
var majorityElement = function(nums) {
  var candidate = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];    
    }
    count += candidate === nums[i] ? 1 : -1;
  }
  return candidate;
}

console.log(majorityElement([1,2,3,2,2,2,5,4,2]));