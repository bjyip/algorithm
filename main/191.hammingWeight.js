// 191. 位1的个数
// 编写一个函数，输入是一个无符号整数（以二进制串的形式），
// 返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。

// 循环和位移动
var hammingWeight = function(n) {
  var bits = 0;
  var mask = 1;
  for (var i = 0; i < 32; i++) {
    if ((n & mask) !== 0) {
      bits++;
    }
    mask <<= 1;
  }
  return bits;
};
/**
 * 复杂度分析
 * 时间复杂度：O(1) 。运行时间依赖于数字 n 的位数。由于这题中 n 是一个 32 位数，所以运行时间是 O(1) 的。
 * 空间复杂度：O(1)。没有使用额外空间。
 */

// 位操作的小技巧
var hammingWeight = function(n) {
  var bits = 0;
  while (n !== 0) {
    bits++;
    n &= (n - 1);
  }
  return bits;
}
/**
 * 复杂度分析
 * 时间复杂度：O(1) 。运行时间与 n 中位为 1 的有关。在最坏情况下， n 中所有位都是 1 。对于 32 位整数，运行时间是 O(1) 的。
 * 空间复杂度：O(1) 。没有使用额外空间。

 */

// 方法三，js中有问题
var hammingWeight = function(n) {
  var bits = 0;
  while (n !== 0) {
    bits += n & 1;
    n >>= 1;
  }
  return bits;
}
console.log(hammingWeight('11111111111111111111111111111101'))