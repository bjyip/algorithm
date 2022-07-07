// 10- II. 青蛙跳台阶问题


// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 本题可转化为 求斐波那契数列第 n 项的值，唯一的不同在于起始数字不同：
//  青蛙跳台阶问题： f(0)=1 , f(1)=1 , f(2)=2 ；
//  斐波那契数列问题： f(0)=0 , f(1)=1 , f(2)=1 。

/**
 * @param {number} n
 * @return {number}
 */
// 递归（分治）
var numWays1 = function(n) {
  if (n <= 3) {
    return n;
  }
  return (numWays1(n - 1) + numWays1(n - 2)) % 1000000007;
};
/**
 * 复杂度分析
 * 时间复杂度：O(2^N)，这是计算斐波那契数最慢的方法。因为它需要指数的时间。
 * 空间复杂度：O(N)，在堆栈中我们需要与 N 成正比的空间大小。该堆栈跟踪 fib(N) 的函数调用，随着堆栈的不断增长如果没有足够的内存则会导致 StackOverflowError。
 */

// 记忆化递归
var numWays2 = function(n, cache = {}) {
  if (n <= 3) {
    return n
  }
  if (cache[n]) return cache[n]
  cache[n] = (numWays2(n - 1) + numWays2(n - 2)) % 1000000007
  return cache[n]
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N)。
 * 空间复杂度 O(N)，内存中使用的堆栈大小。
 */

// 动态规划
var numWays3 = function(n) {
  if (n <= 3) {
    return n
  }
  var a = 2, b = 3, sum
  for (let i = 4; i <= n; i++) {
    sum = (a + b) % 1000000007
    a = b
    b = sum
  }
  return sum
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 计算 f(n) 需循环 n 次，每轮循环内计算操作使用 O(1) 。
 * 空间复杂度 O(1) ： 几个标志变量使用常数大小的额外空间。
 */

// 增加限制：不能连续走两步
var numWays4 = function(n, status = 1) {
  if (n <= 1) {
    return 1
  }
  if (status < 2) {
    return numWays4(n - 1, 1) + numWays4(n - 2, 2)
  } else {
    return numWays4(n - 1, 1)
  }
}

// 记忆版
var numWays5 = function(n, status = 1) {
  var hash = {}
  var recur = function(n, status) {
    if (n <= 1) {
      return 1
    }
    if (hash[n]) {
      return hash[n]
    }
    if (status < 2) {
      hash[n] = numWays5(n - 1, 1) + numWays5(n - 2, 2)
    } else {
      hash[n] = numWays5(n - 1, 1)
    }
    return hash[n]
  }
  return recur(n, status)
}

// 动态规划（未解决）
function numWays6(n) {
  if (n <= 3) return n
  var prePrePre = 1
  var prePre = 2
  var pre = 3
  var cur
  for (var i = 4; i <= n; i++) {
    cur = pre + prePrePre
    prePrePre = prePre
    prePre = pre
    pre = cur
  }

  return cur
}

console.log(numWays6(9))