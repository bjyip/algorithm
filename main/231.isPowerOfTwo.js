// 2的幂

// 迭代
var isPowerOfTwo = function(n) {
  if (n === 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};
/**
 * 复杂度分析
 * 时间复杂度：O(logN)。
 * 空间复杂度：O(1)。
 */

// 位运算：获取二进制中最右边的 1
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }
  return (n & -n) === n;
}
/**
 * 复杂度分析
 * 时间复杂度：O(1)。
 * 空间复杂度：O(1)。
 */

// 位运算：去除二进制中最右边的 1
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }
  return (n & n - 1) === 0;
}
/**
 * 复杂度分析
 * 时间复杂度：O(1)。
 * 空间复杂度：O(1)。
 */

console.log(isPowerOfTwo(2147483648))