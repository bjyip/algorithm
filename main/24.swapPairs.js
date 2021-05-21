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
  // 终止条件：链表中没有节点，或者链表中只有一个节点，无法再交换
  if (!head || !head.next) {
    return head;
  }
  var newHead = head.next;
  // 将其余节点进行两两交换，交换后的新的头节点为 head 的下一个节点
  head.next = swapPairs(newHead.next)
  // 将第二个与第一个交换
  newHead.next = head
  // 返回新的链表的头节点
  return newHead;
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