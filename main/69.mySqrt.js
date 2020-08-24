// x 的平方根

// 二分查找
var mySqrt = function(x) {
  var left = 0, right = x;
  while (left <= right) {
    var middle = parseInt((left + right) / 2);
    if (middle * middle === x) {
      return middle;
    }
    if (middle * middle < x) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return right;
};
/**
 * 复杂度分析
 * 时间复杂度：O(logx)，即为二分查找需要的次数。
 * 空间复杂度：O(1)。
 */
console.log(mySqrt(8))