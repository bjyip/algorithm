var GenerateTreeNode = require('./binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([3,9,20,3,2,15,7]);

// BFS
// var minDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   var queue = [root];
//   var level = 0;
//   while (queue.length) {
//     level ++;
//     var len = queue.length;
//     for (var i = 0; i < len; i++) {
//       var node = queue.shift();
//       if (!node.left && !node.right) {
//         return level;
//       }
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
// };

// DFS遍历
// var minDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   var steak = [[1, root]];
//   var level = Infinity;
//   while (steak.length) {
//     var cur = steak.pop();
//     var curLevel = cur[0];
//     var node = cur[1];
//     if (!node.left && !node.right) {
//       level = Math.min(level, curLevel);
//     }
//     if (node.left) {
//       steak.push([curLevel + 1, node.left]);
//     }
//     if (node.right) {
//       steak.push([curLevel + 1, node.right]);
//     }
//   }
//   return level;
// };

// DFS递归
// var minDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   if (!root.left && !root.right) {
//     return 1;
//   }
//   var level = Infinity;
//   if (root.left) {
//     level = Math.min(minDepth(root.left), level);
//   }
//   if (root.right) {
//     level = Math.min(minDepth(root.right), level);
//   }
//   return level + 1;
// };

// 分治
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left || !root.right) {
    return 1 + minDepth(root.left) + minDepth(root.right);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
console.log(minDepth(treeNode))
