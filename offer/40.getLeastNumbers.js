// 40.最小的k个数

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// 方法一：排序
var getLeastNumbers = function (arr, k) {
  return arr.sort().slice(0, k);
}
/**
 * 复杂度分析
 * 时间复杂度：O(nlogn)，其中 n 是数组 arr 的长度。算法的时间复杂度即排序的时间复杂度。
 * 空间复杂度：O(logn)，排序所需额外的空间复杂度为 O(logn)。
 */

// 方法二：大顶堆
var getLeastNumbers = function (arr, k) {
  // 从 arr 中取出前 k 个数，从后往前，自上而下式建大顶堆
  var heap = [null].concat(arr.slice(0, k));
  // 从最后一个非叶子节点（数组中间）开始，自上而下式堆化
  for (var i = Math.floor(k / 2); i >= 1; i--) {
    heapify(heap, k, i);
  }

  // 处理k后面的数据，从 k 位开始遍历数组
  for (var i = k; i < arr.length; i++) {
    if (heap[1] > arr[i]) {
      heap[1] = arr[i];
      // 替换并堆化
      heapify(heap, k, 1);
    }
  }
  // 删除heap中第一个元素
  heap.shift();
  return heap;
}

// 堆化
var heapify = function(heap, k, i) {
  var maxIndex = i;
  // 自上而下式堆化
  while (true) {
    // 比较子节点，把最大的上浮
    if (i * 2 <= k && heap[i * 2] > heap[maxIndex]) {
      maxIndex = i * 2;
    }
    if (i * 2 + 1 <= k && heap[i * 2 + 1] > heap[maxIndex]) {
      maxIndex = i * 2 + 1;
    }
    if (maxIndex !== i) {
      // 交换
      var temp = heap[i]
      heap[i] = heap[j]
      heap[j] = temp
      i = maxIndex;
    } else {
      break;
    }
  }
}

/**
 * 复杂度分析
 * 时间复杂度：O(nlogk)，其中 n 是数组 arr 的长度。由于大根堆实时维护前 k 小值，所以插入删除都是 O(logk) 的时间复杂度，最坏情况下数组里 n 个数都会插入，所以一共需要 O(nlogk) 的时间复杂度。
 * 空间复杂度：O(k)，因为大根堆里最多 k 个数。
 */

// 方法三：快排思想
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
/**
 * 复杂度分析
 * 时间复杂度：期望为 O(n) ，由于证明过程很繁琐，所以不再这里展开讲。具体证明可以参考《算法导论》第 9 章第 2 小节。
 *    最坏情况下的时间复杂度为 O(n^2)。情况最差时，每次的划分点都是最大值或最小值，一共需要划分 n−1 次，而一次划分需要线性的时间复杂度，所以最坏情况下时间复杂度为 O(n^2)。
 * 空间复杂度：期望为 O(logn)，递归调用的期望深度为 O(logn)，每层需要的空间为 O(1)，只有常数个变量。
 *    最坏情况下的空间复杂度为 O(n)。最坏情况下需要划分 n 次，即 randomized_selected 函数递归调用最深 n−1 层，而每层由于需要 O(1) 的空间，所以一共需要 O(n) 的空间复杂度。

 */
console.log(getLeastNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
