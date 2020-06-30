
var GenerateTreeNode = require('./binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([3,9,20,null,null,15,7]);

// BFS
// var maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   var queue = [root];
//   var level = 0;
//   while (queue.length) {
//     var len = queue.length;
//     for (var i = 0; i < len; i++) {
//       var node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     level++
//   }
//   return level;
// };

// DFS
// var maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   var steak = [];
//   steak.push([1, root]);
//   var level = 0;
//   while (steak.length) {
//     var cur = steak.pop();
//     var curLevel = cur[0];
//     var node = cur[1];
//     if (node) {
//       level = Math.max(level, curLevel);
//       steak.push([curLevel + 1, node.left]);
//       steak.push([curLevel + 1, node.right]);
//     }
//   }
//   return level;
// };


// 分治
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

console.log(maxDepth(treeNode))