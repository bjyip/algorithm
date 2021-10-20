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