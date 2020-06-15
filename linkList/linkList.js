function ListNode(val) {
  this.val = val;
  this.next = null;
}

var LinkList = function () {
  this.head = null;
  this.length = 0;

}
// 增加一个节点
LinkList.prototype.append = function (val) {
  var node = new ListNode(val);
  if (this.head === null) {
    this.head = node;
  } else {
    var current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
}
// 批量增加节点
LinkList.prototype.appendBatch = function (elements) {
  for (var i = 0; i < elements.length; i++) {
    var node = new ListNode(elements[i]);
    if (this.head === null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current && current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
}

// 删除节点
LinkList.prototype.delete = function (index) {
  if (index === 0) {
    this.head = this.head.next;
  } else {
    var currIndex = 0;
    while (this.head) {
      if (currIndex + 1 === index) {
        this.head.next = this.head.next.next;
        this.length--
        return this.head;
      }
      currIndex++;
      this.head = this.head.next;
    }
  }
}
// 更新节点
LinkList.prototype.update = function (index, val) {
  var currIndex = 0;
  var current = this.head;
  while (current) {
    if (currIndex === index) {
      current.val = val;
      return this.head;
    }
    currIndex++
    current = current.next;
  }
}
// 获取节点
LinkList.prototype.get = function(index) {
  var currIndex = 0;
  var current = this.head;
  while (current) {
    if (currIndex === index) {
      return current;
    }
    currIndex++
    current = current.next;
  }
}

module.exports = {
  LinkList: LinkList,
  ListNode: ListNode
}
