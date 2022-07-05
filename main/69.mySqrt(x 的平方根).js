// x 的平方根
// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

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