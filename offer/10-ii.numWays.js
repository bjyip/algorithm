// 10- II. 青蛙跳台阶问题

/**
 * @param {number} n
 * @return {number}
 */
// 递归
var numWays = function(n) {
  if (n <= 1) {
    return 1;
  }
  return (numWays(n - 1) + numWays(n - 2)) % 1000000007;
};
/**
 * 复杂度分析
 * 时间复杂度：O(2^N)，这是计算斐波那契数最慢的方法。因为它需要指数的时间。
 * 空间复杂度：O(N)，在堆栈中我们需要与 N 成正比的空间大小。该堆栈跟踪 fib(N) 的函数调用，随着堆栈的不断增长如果没有足够的内存则会导致 StackOverflowError。
 */

// 记忆化递归
var hash = {};
var numWays = function(n) {
  if (n <= 1) {
    return 1;
  }
  if (hash[n]) {
    return hash[n];
  } else {
    hash[n] = (numWays(n - 1) + numWays(n - 2)) % 1000000007;
    return hash[n]
  }
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N)。
 * 空间复杂度 O(N)，内存中使用的堆栈大小。
 */

// 动态规划
var numWays = function(n) {
  var a = 0, b = 1, sum;
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a;
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 计算 f(n) 需循环 n 次，每轮循环内计算操作使用 O(1) 。
 * 空间复杂度 O(1) ： 几个标志变量使用常数大小的额外空间。
 */
console.log(numWays(9))