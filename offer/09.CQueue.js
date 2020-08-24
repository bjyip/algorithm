// 09. 用两个栈实现队列

var CQueue = function() {
  this.steak1 = [];
  this.steak2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.steak1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.steak2.length === 0) {
    while (this.steak1.length > 0) {
      this.steak2.push(this.steak1.pop());
    }
  }
  return this.steak2.pop() || -1;
};
/**
 * 复杂度分析
 * 时间复杂度：对于插入和删除操作，时间复杂度均为 O(1)。插入不多说，对于删除操作，虽然看起来是 O(n) 的时间复杂度，但是仔细考虑下每个元素只会「至多被插入和弹出 stack2 一次」，因此均摊下来每个元素被删除的时间复杂度仍为 O(1)。
 * 空间复杂度：O(n)。需要使用两个栈存储已有的元素。
 */

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */