// 给定一个只包含大写字母的字符串s，字符消除过程是如下进行的：
// 1)如果s包含长度为2的由相同字母组成的子串，那么这些子串会被消除，余下的子串拼成新的字符串。例如”ABCCBCCCAA”中”CC”,”CC”和”AA”会被同时消除，余下”AB”, “C”和”B”拼成新的字符串”ABBC”。
// 2)上述消除会反复一轮一轮进行，直到新的字符串不包含相邻的相同字符为止。
// 例如”ABCCBCCCAA”经过一轮消除得到”ABBC”，再经过一轮消除得到”AC”
// 输入描述:
// 每个测试数据输入包括一行, 由大写字母组成的字符串s，长度不超过100.
// 输出描述:
// 对于每组测试数据, 若最后可以把整个字符串全部消除, 就输出 Yes, 否则输出 No.
// 示例:

// 输入：ABCCBA
// 输出：Yes

// 输入：ABCCCCCBBBBB
// 输出：No

function getString(str) {
  var arr = str.split('')
  var stack = []
  for (let j = 0; j < arr.length; j++) {
    var current = arr[j]
    if (stack.length === 0 || stack[stack.length - 1] !== current) {
      stack.push(arr[j])
    } else {
      stack.pop()
    }
  }
  return stack.length === 0 ? 'Yes' : 'No'
}

console.log(getString('ABCCBA'))
console.log(getString('ABCCCCCBBBBB'))
console.log(getString('AACC'))
console.log(getString('AACCB'))
