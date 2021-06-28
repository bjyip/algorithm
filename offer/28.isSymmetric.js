// 28.对称的二叉树
// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([1,2,2,3,4,4,3]);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return recur(root.left, root.right);
};
var recur = function(left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;
  return recur(left.left, right.right) && recur(left.right, right.left);
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 其中 N 为二叉树的节点数量，每次执行 recur() 可以判断一对节点是否对称，因此最多调用 N/2 次 recur() 方法。
 * 空间复杂度 O(N) ： 最差情况下（见下图），二叉树退化为链表，系统使用 O(N) 大小的栈空间。
 */

console.log(isSymmetric(treeNode));