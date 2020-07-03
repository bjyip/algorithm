// 暴力递归
// var generateParenthesis = function(n) {
//   var generate = function(A) {
//     if (A.length === 2*n) {
//       console.log(A)
//       if (valid(A)) {
//         ans.push(A.join(''))
//       }
//     } else {
//       A.push('(')
//       generate(A)
//       A.pop()
//       A.push(')')
//       generate(A)
//       A.pop()
//     }
//   }
//   var valid = function(A) {
//     var bal = 0;
//     for (var c in A) {
//       if (A[c] === '(') {
//         bal++
//       } else {
//         bal--
//       }
//       if (bal < 0) {
//         return false
//       }
//     }
//     return bal === 0
//   }
//   var ans = []
//   generate([])
//   return ans
// }

// 深度优先遍历（回溯）
// var generateParenthesis = function(n) {
//   var res = []
//   var cur_str = ''
  
//   var dfs = function(cur_str, left, right) {
//     if (left === n && right === n) {
//       res.push(cur_str)
//       return
//     }
//     if (left < n) {
//       dfs(cur_str + '(', left + 1, right)
//     }

//     if (right < n && left > right) {
//       dfs(cur_str + ')', left, right + 1)
//     }
//   }
//   dfs(cur_str, 0, 0)
//   return res
// }

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