// 2的幂
// 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
// 如果存在一个整数 x 使得 n == 2^x ，则认为 n 是 2 的幂次方。

// 迭代
var isPowerOfTwo = function(n) {
  if (n <= 0) {
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
// 一个数 n 是 2 的幂，当且仅当 n 是正整数，并且 n 的二进制表示中仅包含 1 个 1。
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
// 一个数 n 是 2 的幂，当且仅当 n 是正整数，并且 n 的二进制表示中仅包含 1 个 1。
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