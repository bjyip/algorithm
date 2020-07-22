// 方法一
// var hammingWeight = function(n) {
//   var bits = 0;
//   var mask = 1;
//   for (var i = 0; i < 32; i++) {
//     if ((n & mask) !== 0) {
//       bits++;
//     }
//     mask <<= 1;
//   }
//   return bits;
// };

// 方法二
// var hammingWeight = function(n) {
//   var bits = 0;
//   while (n !== 0) {
//     bits++;
//     n &= (n - 1);
//   }
//   return bits;
// }

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