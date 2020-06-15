var LinkList = require('./linkList').LinkList
var ListNode = require('./linkList').ListNode
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])
// linkList.delete(1)
// linkList.update(1, 10)
// console.log(linkList.get(1))

// 递归
// var swapPairs = function(head) {
//   if (!head || !head.next) {
//     return head;
//   }
//   var firstNode = head, secondNode = head.next;
//   firstNode.next = swapPairs(secondNode.next)
//   secondNode.next = firstNode
//   return secondNode;
// };

// 迭代
var swapPairs = function(head) {
  var dummy = new ListNode(-1);
  dummy.next = head;
  var prevNode = dummy;
  while (head && head.next) {
    var firstNode = head;
    var secondNode = head.next;
    // 交换
    firstNode.next = secondNode.next;
    secondNode.next = firstNode
    prevNode.next = secondNode;
    // 为下一次交换重新初始化头和prevNode
    prevNode = firstNode;
    head = firstNode.next
  }
  return dummy.next
}
swapPairs(linkList.head);