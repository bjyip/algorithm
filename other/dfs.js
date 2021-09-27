var GenerateTreeNode = require('../tree/binaryTree').GenerateTreeNode

var binaryTree = new GenerateTreeNode([2, 10, 5, 8, 3, 7, 4]);

// 先序遍历-迭代
function preorder(root) {
  if (!root) {
    return false
  }
  var stack = []
  while (stack.length || root) {
    while (root) {
      console.log(root.val)
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
}
// 先序遍历-递归
function preorderRecur(root) {
  if (!root) {
    return false
  }
  console.log(root.val)
  preorderRecur(node.left)
  preorderRecur(node.right)
}

// 中序遍历-迭代
function inorder(root) {
  if (!root) {
    return false
  }
  var stack = []
  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    console.log(root.val)
    root = root.right
  }
}
// 先序遍历-递归
function inorderRecur(root) {
  if (!root) {
    return false
  }
  inorderRecur(root.left)
  console.log(root.val)
  inorderRecur(root.right)
}

// 后序遍历-迭代
function postorder(root) {
  if (!root) {
    return false
  }
  var stack = []
  var pre
  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (!root.right || root.right === pre) {
      console.log(root.val)
      pre = root
      root = null
    } else {
      stack.push(root)
      root = root.right
    }
  }
}
// 后序遍历-递归
function postorderRecur(root) {
  if (!root) {
    return false
  }
  postorderRecur(root.left)
  postorderRecur(root.right)
  console.log(root.val)
}

console.log(postorder(binaryTree))