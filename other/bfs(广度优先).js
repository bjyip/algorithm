var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode

var binaryTree = new GenerateTreeNode([2, 10, 5, 8, 3, 7, 4]);

var bfs = function(root) {
  if (!root) {
    return []
  }
  var res = []
  var queue = []
  queue.push(root)
  while (queue.length) {
    var len = queue.length
    for (let i = 0; i < len; i++) {
      var node = queue.shift()      
      res.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
}
console.log(bfs(binaryTree))