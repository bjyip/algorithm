/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// 大顶堆
// var getLeastNumbers = function (arr, k) {
//   // 从 arr 中取出前 k 个数，构建一个大顶堆
//   var heap = [null].concat(arr.slice(0, k));
//   buildHeap(heap, k);
//   // 从 k 位开始遍历数组
//   for (var i = k; i < arr.length; i++) {
//     if (heap[1] > arr[i]) {
//       heap[1] = arr[i];
//       // 替换并堆化
//       heapify(heap, k, 1);
//     }
//   }
//   // 删除heap中第一个元素
//   heap.shift();
//   return heap;
// }

// // 建堆，从后往前，自上而下式建大顶堆
// var buildHeap = function(heap, k) {
//   // 从最后一个非叶子节点开始，自上而下式堆化
//   for (var i = Math.floor(k / 2); i >= 1; i--) {
//     heapify(heap, k, i);
//   }
// }

// // 堆化
// var heapify = function(heap, k, i) {
//   var maxIndex = i;
//   // 自上而下式堆化
//   while (true) {
//     // 比较子节点，把最大的上浮
//     if (i * 2 <= k && heap[i * 2] > heap[maxIndex]) {
//       maxIndex = i * 2;
//     }
//     if (i * 2 + 1 <= k && heap[i * 2 + 1] > heap[maxIndex]) {
//       maxIndex = i * 2 + 1;
//     }
//     if (maxIndex !== i) {
//       swap(heap, i, maxIndex);
//       i = maxIndex;
//     } else {
//       break;
//     }
//   }
// }

// // 交换
// var swap = function(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// 快排思想
function partition(arr, start, end) {
  const k = arr[start];
  let left = start + 1,
    right = end;
  while (true) {
    while (left <= end && arr[left] <= k) left++;
    while (right >= start + 1 && arr[right] >= k) right--;

    if (left >= right) {
      break;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  [arr[right], arr[start]] = [arr[start], arr[right]];
  return right;
}
var getLeastNumbers = function(arr, k) {
  if (arr.length <= k) return arr;
  var index = partition(arr, 0, arr.length - 1);
  while (index !== k) {
    if (index < k) {
      index = partition(arr, index + 1, arr.length - 1);
    } else {
      index = partition(arr, 0, index - 1);
    }
  }
  return arr.slice(0, k);
}
console.log(getLeastNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
