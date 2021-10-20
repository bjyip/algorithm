// 用栈实现队列
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack1 = []; // 储存元素
  this.stack2 = []; // 辅助工具
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  // 将stack1倒序放入stack2中
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  // 取出stack2中栈顶元素
  var element = this.stack2.pop();
  // 将stack2剩余元素倒序放入stack1中
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop())
  }
  return element;
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.stack1[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/