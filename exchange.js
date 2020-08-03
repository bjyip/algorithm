/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  var i = 0, j = nums.length - 1;
  while (i < j) {
    while (i < j && (nums[i] & 1) === 1) i++;
    while (i < j && (nums[j] & 1) === 0) j--;
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  return nums;
};

console.log(exchange([1,2,3,4]))