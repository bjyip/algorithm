// 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true;
    }
    var steak = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ')' && steak[0] === "(") {
            steak.pop()
        } else if (s[i] === '}' && steak[0] === "{") {
            steak.pop()
        } else if (s[i] === ']' && steak[0] === "[") {
            steak.pop()
        } else {
            steak.push(s[i])
        }
    }
    return steak.length === 0
};

var isValid = function (s) {
  if (s.length === 0) {
      return true;
  }
  var steak = [];
  var hash = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  for (i = 0; i < s.length; i++) {
      if (hash[s[i]]) {
          steak.push(s[i])
      } else {
          if (s[i] !== hash[steak.pop()]) {
              return false;
          }
      }
  }
  return steak.length === 0;
}
/**
 * 复杂度分析
 * 时间复杂度：O(n)O(n)，其中 nn 是字符串 ss 的长度。
 * 空间复杂度：O(n + |\Sigma|)O(n+∣Σ∣)，其中 \SigmaΣ 表示字符集，本题中字符串只包含 66 种括号，|\Sigma| = 6∣Σ∣=6。栈中的字符数量为 O(n)O(n)，而哈希映射使用的空间为 O(|\Sigma|)O(∣Σ∣)，相加即可得到总空间复杂度。
 */
console.log(isValid("()"))