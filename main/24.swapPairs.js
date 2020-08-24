// 两两交换链表中的节点

var LinkList = require('../linkList/linkList').LinkList
var ListNode = require('../linkList/linkList').ListNode
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])
// linkList.delete(1)
// linkList.update(1, 10)
// console.log(linkList.get(1))

// 递归
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  var firstNode = head, secondNode = head.next;
  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode
  return secondNode;
};
/**
 * 复杂度分析
 * 时间复杂度：O(N)，其中 N 指的是链表的节点数量。
 * 空间复杂度：O(N)，递归过程使用的堆栈空间。
 */

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
/**
 * 复杂度分析
 * 时间复杂度：O(N)，其中 N 指的是链表的节点数量。
 * 空间复杂度：O(1)。
 */
swapPairs(linkList.head);