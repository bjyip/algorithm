var BinaryTree = require('./binaryTree').BinaryTree

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