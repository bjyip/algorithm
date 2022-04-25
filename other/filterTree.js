// 过滤树节点
const tree = [{
  id: 1,
  label: '一级 1',
  children: [{
    id: 4,
    label: '二级 1-1',
    children: [{
      id: 9,
      label: '三级 1-1-1'
    }, {
      id: 10,
      label: '三级 1-1-2'
    }]
  }]
}, {
  id: 2,
  label: '一级 2',
  children: [{
    id: 5,
    label: '二级 2-1'
  }, {
    id: 6,
    label: '二级 2-2'
  }]
}, {
  id: 3,
  label: '一级 3',
  children: [{
    id: 7,
    label: '二级 3-1'
  }, {
    id: 8,
    label: '二级 3-2'
  }]
}]
// 只需要考虑自身的节点满足条件即可,不用带上父节点
function filterTree(nodes, query) {
  if (!nodes) {
    return []
  }
  let newNodes = []
  for (let node of nodes) {
    if (node.label.indexOf(query) > -1) {
      // 递归把node下面的所有子节点都查一遍
      const subs = filterTree(node.children, query)
      if (subs.length) {
        node.children = subs
      } else {
        delete node.children
      }
      newNodes.push(node)
    } else {
      // 递归把node下面的所有子节点都查一遍
      const subs = filterTree(node.children, query)
      if (subs.length) {
        newNodes.push(...subs)
      } 
    }
  }
  return newNodes
}

// 自身以及其子节点满足条件都要过滤出来
function filterTree1(nodes, query) {
  if (!nodes) {
    return []
  }
  const newNodes = []
  for (let node of nodes) {
    if (node.label.indexOf(query) > -1) {
      // 递归把node下面的所有子节点都查一遍
      const subs = filterTree1(node.children, query)
      if (subs.length) {
        node.children = subs
      } else {
        delete node.children
      }
      newNodes.push(node)
    } else {
      // 递归把node下面的所有子节点都查一遍
      const subs = filterTree1(node.children, query)
      if (subs.length) {
        newNodes.push(Object.assign({}, node, {children: subs}))
      }
    }
  }
  return newNodes
}


console.log(JSON.stringify(filterTree(tree, '2')))