// 方法一
// var isPowerOfTwo = function(n) {
//   if (n === 0) {
//     return false;
//   }
//   while (n % 2 === 0) {
//     n /= 2;
//   }
//   return n === 1;
// };

// 方法二
// var isPowerOfTwo = function(n) {
//   if (n <= 0) {
//     return false;
//   }
//   return (n & -n) === n;
// }

// 方法三
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }
  return (n & n - 1) === 0;
}

console.log(isPowerOfTwo(2147483648))