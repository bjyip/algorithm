var BinaryTree = require('./binaryTree').BinaryTree

var binaryTree = new BinaryTree();
// binaryTree.insert(8)
// binaryTree.insert(4)
binaryTree.insertBatch([2, 10, 5, 7])

// 中序遍历
// var isValidBST = function(root) {
//   if (root.left && root.val < root.left.val || root.right && root.val > root.right.val) {
//     return false
//   }
//   if (root.left) {
//     isValidBST(root.left)
//   }
//   if (root.right) {
//     isValidBST(root.right)
//   }
//   return true
// };

// 递归
// var helper = function(root, lower, upper) {
//   if (!root) {
//     return true;
//   }
//   if (root.val <= lower || root.val >= upper) {
//     return false;
//   }
//   return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
// }
// var isValidBST = function(root) {
//   return helper(root, -Infinity, Infinity);
// }

// 中序遍历递归版
var isValidBST = function(root) {
  var helper = function(root) {
    if (root === null) {
      return true;
    }
    var l = helper(root.left);
    if (root.val <= pre) {
      return false;
    }
    pre = root.val;
    var r = helper(root.right);
    return l && r;
  }
  var pre = -Infinity;
  return helper(root);
}

console.log(isValidBST(binaryTree.root))
