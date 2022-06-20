// 冒泡排序（从右排到左）
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 比较轮次
    for (let j = 0; j < arr.length - 1 - i; j++) { // 每轮比较的次数
      if (arr[j] > arr[j + 1]) {
        var tem = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tem
      }
    }
  }
  return arr
}
/**
 * 原理：从第一个元素开始，把当前元素和下一个索引元素进行比较。
 * 如果当前元素大，那么就交换位置，重复操作直到比较到倒数第二个元素（与最后一个进行比较），i是提供给j来做比较的次数。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */


// 选择排序（从左排到右）
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 比较轮次
    var minIdx = i
    for (let j = i + 1; j < arr.length; j++) { // 每轮比较的次数
      minIdx = arr[minIdx] > arr[j] ? j : minIdx
    }
    var tem = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = tem
  }
  return arr
}
/**
 * 原理：遍历数组，设置最小值的索引为 0，如果取出的值比当前最小值小，就替换最小值索引。
 * 遍历完成后，将第一个元素和最小值索引上的值交换。
 * 如上操作后，第一个元素就是数组中的最小值，下次遍历就可以从索引 1 开始重复上述操作。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */


// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const mid = arr.splice(Math.floor(arr.length / 2), 1)[0]
  const left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}
/**
 * 原理：在数据集之中，找一个基准点，建立两个数组，分别存储左边和右边的数组，利用递归进行下次比较。
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(logn)
 */

// 插入排序
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var current = arr[i]
    var prevIndex = i - 1
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex]
      prevIndex--
    }
    arr[prevIndex + 1] = current
  }
  return arr
}
/**
 * 原理：第一个元素默认是已排序元素，取出下一个元素和当前元素比较，如果当前元素大就交换位置。
 * 那么此时第一个元素就是当前的最小数，所以下次取出操作从第三个元素开始，向前对比，重复之前的操作。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */



console.log(JSON.stringify(insertSort([1,4,6,3,21,4])))