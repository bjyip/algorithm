// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 一遍哈希表
var twoSum = function(nums, target) {
  var hash = {};
  var now = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
      now = target - nums[i];
      if (hash[now] !== undefined) {
          return [hash[now], i]
      }
      hash[nums[i]] = i;
  }
};
/**
 * 复杂度分析：
 * 时间复杂度：O(n)，我们只遍历了包含有 n 个元素的列表一次。在表中进行的每次查找只花费 O(1) 的时间。
 * 空间复杂度：O(n)，所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 n 个元素。
 */

console.log(twoSum([2,7,11,15], 9));