// 191. 位1的个数
// 编写一个函数，输入是一个无符号整数（以二进制串的形式），
// 返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。
// 输入必须是长度为 32 的 二进制串。

// 循环和位移动
var hammingWeight = function(n) {
  var ret = 0;
  var mask = 1; // 转成二进制是：00000000 00000000 00000000 0000001
  for (var i = 0; i < 32; i++) {
    if ((n & mask) !== 0) { // 二进制中 1 & 1等于1，1 & 0等于0，0 & 0等于0
      ret++;
    }
    mask <<= 1;
  }
  return ret;
};
/**
 * 复杂度分析
 * 时间复杂度：O(1) 。其中 k 是 int 型的二进制位数，k=32。我们需要检查 n 的二进制位的每一位，一共需要检查 32 位。
 * 空间复杂度：O(1)。只需要常数的空间保存若干变量。
 */

// 位操作的小技巧
var hammingWeight = function(n) {
  var ret = 0;
  while (n !== 0) {
    ret++;
    n &= (n - 1); // n & (n - 1) => 清零最低位的1
  }
  return ret;
}
  /**
 * 复杂度分析
 * 时间复杂度：O(1) 。运行时间与 n 中位为 1 的有关。在最坏情况下， n 中所有位都是 1 。对于 32 位整数，运行时间是 O(1) 的。
 * 空间复杂度：O(1) 。没有使用额外空间。

 */

// 方法三，js中有问题
var hammingWeight = function(n) {
  var ret = 0;
  while (n !== 0) {
    ret += n & 1;
    n >>= 1;
  }
  return ret;
}
console.log(hammingWeight('11111111111111111111111111111101'))