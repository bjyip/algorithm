// 二叉树的最大深度
var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([3,9,20,null,null,15,7]);

// BFS
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  var queue = [root];
  var level = 0;
  while (queue.length) {
    var len = queue.length;
    for (var i = 0; i < len; i++) {
      var node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++
  }
  return level;
};
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 n 为二叉树的节点个数。与方法一同样的分析，每个节点只会被访问一次。
 * 空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到 O(n)。
 */

// DFS
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  var steak = [[1, root]];
  var level = 0;
  while (steak.length) {
    var cur = steak.pop();
    var curLevel = cur[0];
    var node = cur[1];
    if (!node.left && !node.right) {
      level = Math.max(level, curLevel);
    }
    if (node.left) {
      steak.push([curLevel + 1, node.left]);
    }
    if (node.right) {
      steak.push([curLevel + 1, node.right]);
    }
  }
  return level;
};
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 n 为二叉树的节点个数。与方法一同样的分析，每个节点只会被访问一次。
 * 空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到 O(n)。
 */

// 分治（递归）
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 n 为二叉树节点的个数。每个节点在递归中只被遍历一次。
 * 空间复杂度：O(height)，其中 height 表示二叉树的高度。递归函数需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。
 */

console.log(maxDepth(treeNode))