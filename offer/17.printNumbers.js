// 打印从1到最大的n位数

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
/**
 * 复杂度分析：
 * 时间复杂度 O(10^n)： 生成长度为 10^n10 的列表需使用 O(10^n)时间。
 * 空间复杂度 O(1) ： 建立列表需使用 O(1) 大小的额外空间（ 列表作为返回结果，不计入额外空间 ）。
 */
console.log(printNumbers(2))