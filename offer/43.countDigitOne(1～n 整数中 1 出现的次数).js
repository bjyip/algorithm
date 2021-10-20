// 1～n 整数中 1 出现的次数

// 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。
// 例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。
function count(a) {
  var c = 0
  while (a > 0) {
    c += a % 10 === 1 ? 1 : 0
    a /= 10
  }
  return c
}
function cal1Num(n) {
  var num = 0
  for (let i = 1; i <= n; i++) {
    num += count(i)
  }
  return num
}
console.log(cal1Num(13))