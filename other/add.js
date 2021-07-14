// 实现add函数使得一下表达式的值正确
// add(1，2，3).sumOf() // 6
// add(2)(4, 1)(2).sumOf() // 9
function add() {
  const arr = [...arguments]
  function addPro() {
    arr.push(...arguments)
    return addPro
  }
  addPro.sumOf = function() {
    return arr.reduce((a, b) =>  a + b )
  }
  return addPro
}
console.log(add(1)(2)(3).sumOf())