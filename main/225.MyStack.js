// 用队列实现栈
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue1 = [];
  this.queue2 = [];
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue2.push(x)
  while (this.queue1.length) {
      this.queue2.push(this.queue1.shift());
  }
  while (this.queue2.length) {
      this.queue1.push(this.queue2.shift());
  }
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.queue1.shift();
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.queue1[0]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue1.length === 0;
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/