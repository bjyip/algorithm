// 环形链表

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var LinkList = require('../linkList/linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5, 3])

// 双指针
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    var slow = head, fast = head.next;
    while (fast && fast.next) {
        if (slow.val === fast.val) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false
};

// 哈希表
var hasCycle = function (head) {
  if (!head || !head.next) {
      return false;
  }
  var hash = new Map();
  while (head) {
      if (hash.has(head)) {
          return true;
      }
      hash.set(head);
      head = head.next;
  }
  return false;
}
console.log(hasCycle(linkList.head));
