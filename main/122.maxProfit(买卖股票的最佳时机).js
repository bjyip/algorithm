// 买卖股票的最佳时机 II

// 贪心算法
var maxProfit = function (prices) {
  var res = 0;
  for (var i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      res += prices[i] - prices[i - 1];
    }
  }
  return res;
};
/**
 * 复杂度分析
 * 时间复杂度：O(n)，遍历一次。
 * 空间复杂度：O(1)，需要常量的空间。
 */

// 动态规划
var maxProfit = function(prices) {
  var len = prices.length;
  if (len < 2) {
    return 0;
  }
  var dp = Array.from(new Array(len), () => new Array(2))
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (var i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[len - 1][0];
}
/**
 * 复杂度分析：
 * 时间复杂度：O(N)，这里 N 表示股价数组的长度。
 * 空间复杂度：O(N)，虽然是二维数组，但是第二维是常数，与问题规模无关。
 */

// 全局贪婪匹配（峰谷法）
var maxProfit = function(prices) {
  var i = 0, len = prices.length - 1, maxProfit = 0, valley = prices[0], peak = prices[0];
  while (i < len) {
    while (i < len && prices[i] >= prices[i + 1]) {
      i++
    }
    valley = prices[i]
    while (i < len && prices[i] <= prices[i + 1]) {
      i++
    }
    peak = prices[i]
    maxProfit += peak - valley
  }
  return maxProfit
}
/**
 * 复杂度分析
 * 时间复杂度：O(n)。遍历一次。
 * 空间复杂度：O(1)。需要常量的空间。
 */

console.log(maxProfit([7, 1, 5, 3, 6, 4]))