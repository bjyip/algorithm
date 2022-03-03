// 二叉树的层序遍历

var BinaryTree = require('../tree/binaryTree').BinaryTree

var binaryTree = new BinaryTree();
binaryTree.insertBatch([2, 10, 5, 7])

// BFS
var levelOrder = function(root) {
  var res = []
  if (!root) {
    return res
  }
  var p = []
  p.push(root)
  while (p.length > 0) {
    var len = p.length
    res.push([])
    for (var i = 0; i < len; i++) {
      var node = p.shift()
      res[res.length - 1].push(node.val)
      if (node.left) p.push(node.left)
      if (node.right) p.push(node.right)
    }
  }
  return res
}
/**
 * 复杂度分析
 * 记树上所有节点的个数为 n。
 * 时间复杂度：每个点进队出队各一次，故渐进时间复杂度为 O(n)。
 * 空间复杂度：队列中元素的个数不超过 n 个，故渐进空间复杂度为 O(n)。
 */

// DFS
var levelOrder = function(root) {
  var res = []
  if (root) {
    dfs(res, root, 0);
  }
  return res;
}

var dfs = function(res, node, level) {
  if(res.length - 1 < level){
    res.push([]);
  }
  res[level].push(node.val);
  if(node.left){
    dfs(res, node.left, level + 1);
  }
  if(node.right){
    dfs(res, node.right, level + 1);
  }
}