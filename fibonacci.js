/**
 * @param {number} n
 * @return {number}
 */
// 递归
// var fib = function(n) {
//   if (n <= 1) {
//     return n;
//   }
//   var a = fib(n - 1);
//   var b = fib(n - 2);
//   return (a + b) % 1000000007;
// };

// 记忆化递归
// var fib = function(n) {
//   if (n <= 1) {
//     return n;
//   }
//   cache[0] = 0;
//   cache[1] = 1;
//   return memory(n);
// };
// var cache = {};
// var memory = function(n) {
//   if (cache[n]) {
//     return cache[n]
//   }
//   cache[n] = (fib(n - 1) + fib(n - 2)) % 1000000007;
//   return cache[n];
// }

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
console.log(fib(9))