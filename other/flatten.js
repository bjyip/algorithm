// 多维数组=>一维数组
// [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]

// reduce
// 遍历数组每一项，若值为数组则递归遍历，否则concat。
function flatten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

// toString & split
// 调用数组的toString方法，将数组变为字符串然后再用split分割还原为数组
function flatten(arr) {
  return arr.toString().split(',').map(function (item) {
    return Number(item);
  })
}

// join & split
// 和上面的toString一样，join也可以将数组转换为字符串
function flatten(arr) {
  return arr.join(',').split(',').map(function (item) {
    return parseInt(item);
  })
}

// 递归
// 递归的遍历每一项，若为数组则继续遍历，否则concat
function flatten(arr) {
  var res = [];
  arr.map(item => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

// 扩展运算符
// es6的扩展运算符能将二维数组变为一维，根据这个结果我们可以做一个遍历，若arr中含有数组则使用一次扩展运算符，直至没有为止。
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 使用flat
function flatten(arr) {
  return arr.flat(Infinity)
}
