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
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */