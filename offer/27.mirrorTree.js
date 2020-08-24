// 27.二叉树的镜像

var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([4,2,7,1,3,6,9]);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// BFS
var mirrorTree = function(root) {
  var queue = [];
  queue.push(root);
  while (queue.length) {
    var len = queue.length;
    for (let i = 0; i < len; i++) {
      var node = queue.shift();
      var temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 其中 N 为二叉树的节点数量，建立二叉树镜像需要遍历树的所有节点，占用 O(N) 时间。
 * 空间复杂度 O(N) ： 最差情况下（当为满二叉树时），栈 stack 最多同时存储 N/2 个节点，占用 O(N) 额外空间。
 */

// DFS
var mirrorTree = function(root) {
  if (!root) return null;
  var temp = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(temp);
  return root;
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 其中 N 为二叉树的节点数量，建立二叉树镜像需要遍历树的所有节点，占用 O(N) 时间。
 * 空间复杂度 O(N) ： 最差情况下（当二叉树退化为链表），递归时系统需使用 O(N) 大小的栈空间。
 */
console.log(mirrorTree(treeNode));