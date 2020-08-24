// 206. 反转链表
var LinkList = require('../linkList/linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])

// 双指针
var reverseList = function(head) {
  if (!head) {
      return head;
  }
  var curr = head, prev = null, tempNext = null;
  while (curr) {
      tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
  }
  return prev;
};
/**
 * 复杂度分析
 * 时间复杂度：O(n)，假设 n 是列表的长度，时间复杂度是 O(n)。
 * 空间复杂度：O(1)。
 */

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
/**
 * 复杂度分析
 * 时间复杂度：O(n)，假设 n 是列表的长度，那么时间复杂度为 O(n)。
 * 空间复杂度：O(n)，由于使用递归，将会使用隐式栈空间。递归深度可能会达到 n 层。
 */

reverseList(linkList.head)