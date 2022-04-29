var arr = [
  { name: "浙江省", level: 0, pid: 0, id: 01 },
  { name: "杭州市", level: 1, pid: 01, id: 011 },
  { name: "宁波市", level: 1, pid: 01, id: 012 },
  { name: "温州市", level: 1, pid: 01, id: 013 },
  { name: "嘉兴市", level: 1, pid: 01, id: 014 },
  { name: "湖州市", level: 1, pid: 01, id: 015 },
  { name: "上城区", level: 2, pid: 011, id: 0111 },
  { name: "下城区", level: 2, pid: 011, id: 0112 },
  { name: "江干区", level: 2, pid: 011, id: 0113 },
  { name: "河南省", level: 0, pid: 0, id: 02 },
  { name: "郑州市", level: 1, pid: 02, id: 021 },
  { name: "开封市", level: 1, pid: 02, id: 022 },
  { name: "aa", level: 3, pid: 022, id: 0221 },
  { name: "bb", level: 4, pid: 0221, id: 02211 }

]

// 两个循环
function arrayToTree(data) {
  let cloneData = JSON.parse(JSON.stringify(data))
  return cloneData.filter(parent => {
    let branchArr = cloneData.filter(child => parent.id === child.pid);
    if (branchArr.length) {
      parent.children = branchArr
    }
    return parent.pid === 0;
  })
}

// 用map辅助
function arrayToTree(array) {
  array = JSON.parse(JSON.stringify(array))
  let result = []
  let trees = {}
  array.forEach(item => {
    trees[item.id] = item
  })
  array.forEach(item => {
    if (trees[item.pid]) {
      if (!trees[item.pid].children) {
        trees[item.pid].children = []
      }
      trees[item.pid].children.push(item)
    }
    if (item.pid === 0) {
      result.push(item)
    }
  })
  return result;
}

function transformTree(list) {
  const tree = []
  const record = {}
  for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    // if (record[item.id]) {
    //   item.children = record[item.id]
    // } else {
    //   item.children = record[item.id] = []
    // }
    if (!record[item.id]) {
      record[item.id] = []
    }
    item.children = record[item.id]
    if (item.pid) {
      if (!record[item.pid]) {
        record[item.pid] = []
      }
      record[item.pid].push(item)
    } else {
      tree.push(item)
    }
  }
  return tree
}

const tree = transformTree(arr)
console.log(JSON.stringify(tree))
