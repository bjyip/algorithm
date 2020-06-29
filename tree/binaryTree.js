// 树节点
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 根据数组生成二叉树
function GenerateTreeNode(arr) {
  if (!arr || arr.length === 0) return null;
  var head = new TreeNode(arr[0]);
  var nodeQueue = [];
  nodeQueue.push(head);
  var cur;
  for (var index = 1; index < arr.length; index++) {
    cur = nodeQueue.shift();
    var left = arr[index];
    if (left) {
      cur.left = new TreeNode(left);
      nodeQueue.push(cur.left);
    }
    index++;
    var right = arr[index];
    if (right) {
      cur.right = new TreeNode(right);
      nodeQueue.push(cur.right);
    }
  }
  return head;
}

// 二叉搜索树
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insert = function(val) {
  var treeNode = new TreeNode(val);
  function insertNode(root, node) {
    if (root.val >= node.val) {
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

BinarySearchTree.prototype.insertBatch = function(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    this.insertAsSearch(nodes[i])
  }
}

module.exports = {
  GenerateTreeNode: GenerateTreeNode,
  TreeNode: TreeNode,
  BinarySearchTree: BinarySearchTree
}