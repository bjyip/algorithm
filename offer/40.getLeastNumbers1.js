function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MaxHeap {
  constructor(arr = []) {
    this.container = [];
    if (Array.isArray(arr)) {
      arr.forEach(item => this.insert(item));
    }
  }

  insert(item) {
    this.container.push(item);
    let last = this.container.length - 1;
    while (last) {
      let parent = Math.floor((last - 1) / 2);
      if (this.container[last] <= this.container[parent]) {
        break;
      }
      swap(this.container, last, parent);
      last = parent;
    }
  }

  extract() {
    if (!this.container.length) {
      return null;
    }

    swap(this.container, 0, this.container.length - 1);
    const res = this.container.pop();
    const length = this.container.length;
    let index = 0,
      exchange = index * 2 + 1;

    while (exchange < length) {
      // 如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2;
      if (right < length && this.container[right] > this.container[exchange]) {
        exchange = right;
      }
      if (this.container[exchange] <= this.container[index]) {
        break;
      }
      swap(this.container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }

    return res;
  }

  top() {
    if (this.container.length) return this.container[0];
    return null;
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const length = arr.length;
  if (k >= length) {
    return arr;
  }

  const heap = new MaxHeap(arr.slice(0, k));
  for (let i = k; i < length; ++i) {
    if (heap.top() > arr[i]) {
      heap.extract();
      heap.insert(arr[i]);
    }
  }
  return heap.container;
};
console.log(getLeastNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
