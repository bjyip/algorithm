/**
 * 55-ii.平衡二叉树
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
 * 如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode
var treeNode = new GenerateTreeNode([1,2,2,3,3,null,null,4,4]);
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 先序遍历 + 判断深度 （从顶至底）
var isBalanced = function(root) {
  if (!root) return true;
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
var depth = function(root) {
  if (!root) return 0;
  return Math.max(depth(root.left), depth(root.right)) + 1;
}
/**
 * 复杂度分析：
 * 时间复杂度 O(NlogN)：
 *  最差情况下（为 “满二叉树” 时）， isBalanced(root) 遍历树所有节点，判断每个节点的深度 depth(root) 需要遍历 各子树的所有节点 。
 *  总体时间复杂度 = 每层执行复杂度 × 层数复杂度 = O(N×logN)
 * 空间复杂度 O(N)： 最差情况下（树退化为链表时），系统递归需要使用 O(N) 的栈空间。
 *  
 */

// 后序遍历 + 剪枝 （从底至顶）
var isBalanced = function(root) {
  if (!root) return true;
  return recur(root) !== -1;
}
var recur = function(root) {
  if (!root) return 0;
  var left = recur(root.left);
  if (left === -1) return -1;
  var right = recur(root.right);
  if (right === -1) return -1;
  return Math.abs(left - right) > 2 ? Math.max(left, right) + 1 : -1;
}
/**
 * 复杂度分析：
时间复杂度 O(N)： N 为树的节点数；最差情况下，需要递归遍历树的所有节点。
空间复杂度 O(N)： 最差情况下（树退化为链表时），系统递归需要使用 O(N) 的栈空间。
 */
console.log(isBalanced(treeNode))
