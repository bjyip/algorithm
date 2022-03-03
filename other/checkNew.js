// 版本号如1.1.0，1.2.1，现有两个版本号a，b，判断a相对于b是否是一个新版本






function checkNew(a, b) {
  var arrA = a.split('.')
  var arrB = b.split('.')
  for (let i = 0; i < arrA.length; i++) {
    var itemA = Number(arrA[i])
    var itemB = Number(arrB[i])
    switch (i) {
      case 0:
        if (itemA > itemB) {
          return true
        } else if (itemA < itemB) {
          return false
        }
        break;
      case 1:
        if (itemA > itemB) {
          return true
        } else if (itemA < itemB) {
          return false
        }
        break;
      case 2:
        if (itemA > itemB) {
          return true
        } else if (itemA < itemB) {
          return false
        }
        break;
    }
    return false    
  }
}
checkNew('1.2.1', '1.1.0')