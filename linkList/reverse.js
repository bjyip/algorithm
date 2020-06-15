var LinkList = require('./linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])

// 双指针
// var reverseList = function(head) {
//   if (!head) {
//       return head;
//   }
//   var curr = head, prev = null, tempNext = null;
//   while (curr) {
//       tempNext = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = tempNext;
//   }
//   return prev;
// };

// 递归
var reverseList = function(head) {
  if (!head || !head.next) {
      return head;
  }
  var p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p
}

reverseList(linkList.head)