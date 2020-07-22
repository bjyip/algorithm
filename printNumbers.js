/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  var num = 1, arr = [];
  while (String(num).length <= n) {
    arr.push(num);
    num++;
  }
  return arr;
};
console.log(printNumbers(2))