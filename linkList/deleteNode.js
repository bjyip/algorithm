var LinkList = require('./linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])

var deleteNode = function(head, val) {
  if (!head) return null
  if (head.val === val) return head.next;
  var cur = head;
  while (cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      return head;
    }
    cur = cur.next;
  }
};

console.log(deleteNode(linkList.head, 2))