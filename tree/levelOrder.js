var BinaryTree = require('./binaryTree').BinaryTree

var binaryTree = new BinaryTree();
binaryTree.insertBatch([2, 10, 5, 7])

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