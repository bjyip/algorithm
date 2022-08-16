// 查找一个树结构的某个节点，并输出从根节点到该节点的路径
const tree = [
  { id: '1' },
  { id: '2' },
  {
    id: '3',
    children: [
      { id: '3-1', children: [{ id: '3-1-1' }, { id: '3-1-2' }] },
      { id: '3-2' }
    ]
  }
]
function helper(tree, target, stack) {
  for (let node of tree) {
    //当节点node自己是target，或者它的孩子存在target，把 node 记录了下来
    if (node.id === target || node.children && helper(node.children, target, stack)) {
      stack.unshift(node.id)
      return true
    }
  }
  return false
}
function findPath() {
  var stack = []
  helper(tree, '3-1-2', stack)
  console.log(stack)
}
findPath()