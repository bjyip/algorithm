function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype.insert = function(val) {
  var treeNode = new TreeNode(val);
  function insertNode(root, node) {
    if (root.val > node.val) {
    // 左边
      if (!root.left) {
        root.left = node;
      } else {
        insertNode(root.left, node);
      }
    } else {
      // 右边
      if (!root.right) {
        root.right = node;
      } else {
        insertNode(root.right, node)
      }
    }
  }
  if (!this.root) {
    this.root = treeNode;
  } else {
    insertNode(this.root, treeNode);
  }
}

BinaryTree.prototype.insertBatch = function(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    this.insert(nodes[i])
  }
}

module.exports = {
  TreeNode: TreeNode,
  BinaryTree: BinaryTree
}