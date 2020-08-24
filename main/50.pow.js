// 计算 x 的 n 次幂函数

// 快速幂 + 递归
function quickMul(x, n) {
  if (n === 0) {
    return 1;
  }
  var y = quickMul(x, n / 2);
  return n % 2 === 0 ? y * y : y * y * x;
}
var myPow = function(x, n) {
  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};
/**
 * 复杂度分析
 * 时间复杂度：O(logn)，即为递归的层数。
 * 空间复杂度：O(logn)，即为递归的层数。这是由于递归的函数调用会使用栈空间。
 */

// 递归
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n % 2) {
    return x * myPow(x, n - 1)
  }
  return myPow(x * x, n / 2)
};
console.log(myPow(2, 5))