// 98. 验证二叉搜索树
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

var BinaryTree = require('../tree/binaryTree').BinaryTree

var binaryTree = new BinaryTree();
// binaryTree.insert(8)
// binaryTree.insert(4)
binaryTree.insertBatch([2, 10, 5, 7])

// 中序遍历
var isValidBST = function(root) {
  var arr = [], inOrder = - Infinity;
  while (arr.length || root) {
    while (root) {
      arr.push(root);
      root = root.left;
    }
    root = arr.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inOrder) {
      return false;
    }
    inOrder = root.val;
    root = root.right;
  }
  return true;
};
/**
 * 复杂度分析
 * 时间复杂度 : O(n)，其中 n 为二叉树的节点个数。二叉树的每个节点最多被访问一次，因此时间复杂度为 O(n)。
 * 空间复杂度 : O(n)，其中 n 为二叉树的节点个数。栈最多存储 n 个节点，因此需要额外的 O(n) 的空间。
 */

// 递归
var helper = function(root, lower, upper) {
  if (!root) {
    return true;
  }
  if (root.val <= lower || root.val >= upper) {
    return false;
  }
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
  return helper(root, -Infinity, Infinity);
}
/**
 * 复杂度分析
 * 时间复杂度 : O(n)，其中 nn 为二叉树的节点个数。在递归调用的时候二叉树的每个节点最多被访问一次，因此时间复杂度为 O(n)。
 * 空间复杂度 : O(n)，其中 nn 为二叉树的节点个数。递归函数在递归过程中需要为每一层递归函数分配栈空间，所以这里需要额外的空间且该空间取决于递归的深度，即二叉树的高度。最坏情况下二叉树为一条链，树的高度为 n ，递归最深达到 n 层，故最坏情况下空间复杂度为 O(n) 。
 */

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
