/**
 * 54.二叉搜索树的第k大节点
 * 给定一棵二叉搜索树，请找出其中第k大的节点。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([3,1,4,null,2]);
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var res, c;
var kthLargest = function(root, k) {
  c = k;
  dfs(root);
  return res;
};

var dfs = function(root, k) {
  if (!root) return;
  dfs(root.right);
  if (k === 0) return;
  if (--c === 0) res = root.val;
  dfs(root.left);
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 当树退化为链表时（全部为右子节点），无论 k 的值大小，递归深度都为 N ，占用 O(N) 时间。
 * 空间复杂度 O(N) ： 当树退化为链表时（全部为右子节点），系统使用 O(N) 大小的栈空间。

 * 本文解法基于此性质：二叉搜索树的中序遍历为 递增序列 。
 * 根据以上性质，易得二叉搜索树的 中序遍历倒序 为 递减序列 。
 * 因此，求 “二叉搜索树第 kk 大的节点” 可转化为求 “此树的中序遍历倒序的第 kk 个节点”。
 */
console.log(kthLargest(treeNode, 1))