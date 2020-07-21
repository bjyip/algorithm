/**
 * @param {number} n
 * @return {number}
 */
// 递归
// var numWays = function(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return (numWays(n - 1) + numWays(n - 2)) % 1000000007;
// };

// 记忆化递归
// var hash = {};
// var numWays = function(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   if (hash[n]) {
//     return hash[n];
//   } else {
//     hash[n] = (numWays(n - 1) + numWays(n - 2)) % 1000000007;
//     return hash[n]
//   }
// };

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
console.log(numWays(9))