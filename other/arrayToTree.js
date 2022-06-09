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
function arrayToTree1(array) {
  const cloneArray = JSON.parse(JSON.stringify(array))
  const result = cloneArray.filter(parent => {
    const branchArr = cloneArray.filter(child => parent.id === child.pid);
    if (branchArr.length) {
      parent.children = branchArr
    }
    return parent.pid === 0;
  })
  return result
}

// 用map辅助，并利用引用类型特性
function arrayToTree2(array) {
  // cloneArray、result和trees里面的对象元素共享
  const cloneArray = JSON.parse(JSON.stringify(array))
  let result = []
  let trees = {}
  cloneArray.forEach(item => {
    trees[item.id] = item
  })
  cloneArray.forEach(item => {
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

const tree = arrayToTree2(arr)
console.log(JSON.stringify(tree))
