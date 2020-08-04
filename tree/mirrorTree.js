var GenerateTreeNode = require('./binaryTree').GenerateTreeNode

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
// var mirrorTree = function(root) {
//   var queue = [];
//   queue.push(root);
//   while (queue.length) {
//     var len = queue.length;
//     for (let i = 0; i < len; i++) {
//       var node = queue.shift();
//       var temp = node.left;
//       node.left = node.right;
//       node.right = temp;
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return root;
// };

// DFS
var mirrorTree = function(root) {
  if (!root) return null;
  var temp = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(temp);
  return root;
}
console.log(mirrorTree(treeNode));