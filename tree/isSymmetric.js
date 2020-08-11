var GenerateTreeNode = require('./binaryTree').GenerateTreeNode

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

console.log(isSymmetric(treeNode));