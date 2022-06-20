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
function filterTree1(nodes, query) {
  if (!nodes) {
    return []
  }
  const cloneNodes = JSON.parse(JSON.stringify(nodes))
  let newNodes = []
  for (let node of cloneNodes) {
    // 递归找出node下面符合条件的子节点
    const subs = filterTree1(node.children, query)
    if (node.label.indexOf(query) > -1) {
      if (!subs.length) {
        delete node.children
      }
      newNodes.push(node)
    } else {
      if (subs.length) {
        newNodes.push(...subs)
      }
    }
  }
  return newNodes
}

// 自身节点满足条件以及父节点都要过滤出来
function filterTree2(nodes, query) {
  if (!nodes) {
    return []
  }
  const cloneNodes = JSON.parse(JSON.stringify(nodes))
  const newNodes = []
  for (let node of cloneNodes) {
    // 递归找出node下面符合条件的子节点
    const subs = filterTree2(node.children, query)
    if (node.label.indexOf(query) > -1) {
      if (!subs.length) {
        delete node.children
      }
      newNodes.push(node)
    } else {
      if (subs.length) {
        newNodes.push(Object.assign({}, node, { children: subs }))
      }
    }
  }
  return newNodes
}


console.log(JSON.stringify(filterTree1(tree, '二级 1-1')))
console.log('---')
console.log(JSON.stringify(filterTree2(tree, '二级 1-1')))