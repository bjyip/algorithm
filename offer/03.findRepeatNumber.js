// 03.数组中重复的数字

// hash
var findRepeatNumber = function(nums) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return nums[i];
    } else {
      hash[nums[i]] = true;
    }
  }
};
/**
 * 复杂性分析
 * 时间复杂度：O(n)。遍历数组一遍。使用哈希集合（HashSet），添加元素的时间复杂度为 O(1)，故总的时间复杂度是 O(n)。
 * 空间复杂度：O(n)。不重复的每个元素都可能存入集合，因此占用 O(n) 额外空间。
 */

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