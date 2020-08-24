// 多数元素
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
var majorityElement = function(nums) {
  var newNums = quickSort(nums);
  return newNums[Math.floor(newNums.length / 2)]
};

var quickSort = function(arr) {
  if (arr.length <= 1) return arr;
  var midIndex = Math.floor(arr.length / 2);
  var mid = arr.splice(midIndex, 1)[0];
  var left = [], right = [];
  for (var i = 0; i < arr.length; i++) {
    if (mid > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}
/**
 * 复杂度分析
 * 时间复杂度：O(nlogn)。将数组排序的时间复杂度为 O(nlogn)。
 * 空间复杂度：O(logn)。如果使用语言自带的排序算法，需要使用 O(logn) 的栈空间。如果自己编写堆排序，则只需要使用 O(1) 的额外空间。
 */

// hash
var majorityElement = function(nums) {
  var hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1
    }
    if (hash[nums[i]] > Math.floor(nums.length / 2)) return nums[i];
  }
};
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 n 是数组 nums 的长度。我们遍历数组 nums 一次，对于 nums 中的每一个元素，将其插入哈希表都只需要常数时间。如果在遍历时没有维护最大值，在遍历结束后还需要对哈希表进行遍历，因为哈希表中占用的空间为 O(n)（可参考下文的空间复杂度分析），那么遍历的时间不会超过 O(n)。因此总时间复杂度为 O(n)。
 * 空间复杂度：O(n)O(n)。
*/

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
/**
 * 复杂度分析
 * 时间复杂度：O(n)。Boyer-Moore 算法只对数组进行了一次遍历。
 * 空间复杂度：O(1)。Boyer-Moore 算法只需要常数级别的额外空间。
 */

console.log(majorityElement([1,2,3,2,2,2,5,4,2]));