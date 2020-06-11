// function quickMul(x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   var y = quickMul(x, n / 2);
//   return n % 2 === 0 ? y * y : y * y * x;
// }
// var myPow = function(x, n) {
//   return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
// };
// console.log(myPow(2, 10))

var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n % 2) {
    return x * myPow(x, n - 1)
  }
  return myPow(x * x, n / 2)
};
console.log(myPow(2, 5))