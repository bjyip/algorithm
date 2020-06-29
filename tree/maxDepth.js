
var GenerateTreeNode = require('./binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([3,9,20,null,null,15,7]);
console.log(treeNode);
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var max = 0;
// var maxDepth = function(root) {
//   var level = 0;
//   if (root) {
//     dfs(root, level);
//   }
//   return max;
// };
// var dfs = function(node, level) {
//   max = level > max ? level : max;
//   if (node.left) dfs(node.left, level + 1);
//   if (node.right) dfs(node.right, level + 1);
// }
// maxDepth(binaryTree.root);