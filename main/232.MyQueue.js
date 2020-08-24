// 用栈实现队列
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.steak1 = [];
  this.steak2 = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.steak1.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  while (this.steak1.length) {
      this.steak2.push(this.steak1.pop())
  }
  var element = this.steak2.pop();
  while (this.steak2.length) {
      this.steak1.push(this.steak2.pop())
  }
  return element;
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.steak1[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.steak1.length === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/