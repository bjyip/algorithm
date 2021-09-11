// 二叉搜索树的最近公共祖先
// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
// 说明:
// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉搜索树中。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode
var treeNode = new GenerateTreeNode([6,2,8,0,4,7,9,null,null,3,5]);

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 // 迭代
 var lowestCommonAncestor = function(root, p, q) {
  while (root) {
    if (p.val > root.val && q.val > root.val) { // p、q均大于root，往右节点找
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) { // p、q均小于root，往左节点找
      root = root.left;
    } else { // p、q分别小于或大于root，找到目标
      return root;
    }
  }
  return null;
}
/**
 * 复杂度分析
 * 时间复杂度：O(N)，其中 N 为 BST 中节点的个数，在最坏的情况下我们可能需要遍历 BST 中所有的节点。
 * 空间复杂度：O(1)
 */

// 递归
var lowestCommonAncestor = function(root, p, q) {
  if (p.val > root.val && q.val > root.val) { // p、q均大于root，往右节点找
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) { // p、q均小于root，往左节点找
    return lowestCommonAncestor(root.left, p, q);
  } else { // p、q分别小于或大于root，找到目标
    return root;
  }
};
/**
 * 复杂度分析
 * 时间复杂度：O(N)，其中 N 为 BST 中节点的个数，在最坏的情况下我们可能需要访问 BST 中所有的节点。
 * 空间复杂度：O(N)，所需开辟的额外空间主要是递归栈产生的，之所以是 N 是因为 BST 的高度为 N。
 */

console.log(lowestCommonAncestor(treeNode, 2, 8))