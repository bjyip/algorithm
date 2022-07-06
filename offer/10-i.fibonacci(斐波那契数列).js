// 10- I. 斐波那契数列

// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

/**
 * @param {number} n
 * @return {number}
 */
// 递归
var fib = function(n) {
  if (n <= 1) {
    return n;
  }
  return (fib(n - 1) + fib(n - 2)) % 1000000007;
};
/**
 * 复杂度分析
 * 时间复杂度：O(2^N)，这是计算斐波那契数最慢的方法。因为它需要指数的时间。
 * 空间复杂度：O(N)，在堆栈中我们需要与 N 成正比的空间大小。该堆栈跟踪 fib(N) 的函数调用，随着堆栈的不断增长如果没有足够的内存则会导致 StackOverflowError。
 */

// 记忆化递归
function fib(n, cache = {}) {
  if (n <= 1) {
    return n
  }
  if (cache[n]) {
    return cache[n]
  }
  cache[n] = (fib(n - 1) + fib(n - 2)) % 1000000007
  return cache[n]
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N)。
 * 空间复杂度 O(N)，内存中使用的堆栈大小。
 */

// 动态规划
var fib = function(n) {
  var a = 0, b = 1, sum = 0;
  for (var i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a;
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 计算 f(n) 需循环 n 次，每轮循环内计算操作使用 O(1) 。
 * 空间复杂度 O(1) ： 几个标志变量使用常数大小的额外空间。
 */
console.log(fib(9))