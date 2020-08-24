// 22.生成有效括号组合

// 暴力递归
var generateParenthesis = function(n) {
  var generate = function(A) {
    if (A.length === 2*n) {
      console.log(A)
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
      if (A[c] === '(') {
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
/**
 * 复杂度分析
 * 时间复杂度：O(2^(2n)n)，对于 2^(2n) 个序列中的每一个，我们用于建立和验证该序列的复杂度为 O(n)。
 * 空间复杂度：O(n)，除了答案数组之外，我们所需要的空间取决于递归栈的深度，每一层递归函数需要 O(1) 的空间，最多递归 2n 层，因此空间复杂度为 O(n)。
 */

// 深度优先遍历（回溯）
var generateParenthesis = function(n) {
  var res = []
  var cur_str = ''
  
  var dfs = function(cur_str, left, right) {
    if (left === n && right === n) {
      res.push(cur_str)
      return
    }
    if (left < n) {
      dfs(cur_str + '(', left + 1, right)
    }

    if (right < n && left > right) {
      dfs(cur_str + ')', left, right + 1)
    }
  }
  dfs(cur_str, 0, 0)
  return res
}
/**
 * 复杂度分析
 * 时间复杂度：O(4^n/n^(1/2))，在回溯过程中，每个答案需要 O(n) 的时间复制到答案数组中。
 * 空间复杂度：O(n)，除了答案数组之外，我们所需要的空间取决于递归栈的深度，每一层递归函数需要 O(1) 的空间，最多递归 2n 层，因此空间复杂度为 O(n)。
 */

// 广度优先
var generateParenthesis = function(n) {
  var res = [];
  if (n === 0) {
    return res;
  }
  var queue = [];
  queue.push({ str: "", left: n, right: n });
  while (queue.length > 0) {
    var curNode = queue.shift();
    if (curNode.left == 0 && curNode.right == 0) {
      res.push(curNode.str);
    }
    if (curNode.left > 0) {
      queue.push({ str: curNode.str + "(", left: curNode.left - 1, right: curNode.right });
    }
    if (curNode.right > 0 && curNode.left < curNode.right) {
      queue.push({ str: curNode.str + ")", left: curNode.left, right: curNode.right - 1 });
    }
  }
  return res;
}

console.log(generateParenthesis(3))