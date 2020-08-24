// 二叉树的最小深度
// https://blog.csdn.net/Mr_SCX/article/details/105456531
var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode

var treeNode = new GenerateTreeNode([3,9,20,3,2,15,7]);

// BFS
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  var queue = [root];
  var level = 0;
  while (queue.length) {
    level ++;
    var len = queue.length;
    for (var i = 0; i < len; i++) {
      var node = queue.shift();
      if (!node.left && !node.right) {
        return level;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};
/**
 * 复杂度分析
 * 时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。
 * 空间复杂度：O(N)，其中 N 是树的节点数。空间复杂度主要取决于队列的开销，队列中的元素个数不会超过树的节点数。

 */

// DFS遍历
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  var steak = [[1, root]];
  var level = Infinity;
  while (steak.length) {
    var cur = steak.pop();
    var curLevel = cur[0];
    var node = cur[1];
    if (!node.left && !node.right) {
      level = Math.min(level, curLevel);
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
 * 时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。
 * 空间复杂度：O(H)，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(logN)。
 */

// DFS递归
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  var level = Infinity;
  if (root.left) {
    level = Math.min(minDepth(root.left), level);
  }
  if (root.right) {
    level = Math.min(minDepth(root.right), level);
  }
  return level + 1;
};

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
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 n 为二叉树节点的个数。每个节点在递归中只被遍历一次。
 * 空间复杂度：O(height)，其中 height 表示二叉树的高度。递归函数需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。
 */

console.log(minDepth(treeNode))
