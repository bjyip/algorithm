var generateParenthesis = function(n) {
  var generate = function(A) {
    if (A.length === 2*n) {
      if (valid(A)) {
        ans.push(A.join(''))
      }
    } else {
      A.push('(')
      generate(A)
      A.pop()
      A.push(')')
      generate(A)
      A.pop()
    }
  }
  var valid = function(A) {
    var bal = 0;
    for (var c in A) {
      if (c === '(') {
        bal++
      } else {
        bal--
      }
      if (bal < 0) {
        return false
      }
    }
    return bal === 0
  }
  var ans = []
  generate([])
  return ans
}
console.log(generateParenthesis(3))