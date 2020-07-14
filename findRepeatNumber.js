// hash
// var findRepeatNumber = function(nums) {
//   var hash = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (hash[nums[i]]) {
//       return nums[i];
//     } else {
//       hash[nums[i]] = true;
//     }
//   }
// };

// 冒泡对比
var findRepeatNumber = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }      
    }
  }
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));