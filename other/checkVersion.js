// 版本字符串长度一样
function isUpgrade(version1, version2) {
  var version1List = version1.split('.')
  var version2List = version2.split('.')
  for (var i = 0; i < version1List.length; i++) {
    if (parseInt(version1List[i]) < parseInt(version2List[i])) {
      return true
    } else if (parseInt(version1List[i]) > parseInt(version2List[i])) {
      return false
    }
  }
  return false
}

// 版本字符串长度不一样
function compareVersion(v1, v2) {
  var arr1 = v1.split('.')
  var arr2 = v2.split('.')
  var len = Math.min(arr1.length, arr2.length)
  for (let i = 0; i < len; i++) {
    if (parseInt(arr2[i]) > parseInt(arr1[i])) {
      return 1
    } else if (parseInt(arr2[i]) < parseInt(arr1[i])) {
      return -1
    }
  }
  if (arr2.length > arr1.length) {
    for (let i = len; i < arr2.length; i++) {
      if (parseInt(arr2[i]) > 0) {
        return 1
      }
    }
  } else if (arr2.length < arr1.length) {
    for (let i = len; i < arr1.length; i++) {
      if (parseInt(arr1[i]) > 0) {
        return -1
      }
    }
  }
  return 0
}
