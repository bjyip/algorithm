

// 25.合并两个排序的链表

var LinkList = require('../linkList/linkList').LinkList
var linkList1 = new LinkList();
var linkList2 = new LinkList();
linkList1.appendBatch([1, 2, 4])
linkList2.appendBatch([1, 3, 4])
var ListNode = require('../linkList/linkList').ListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var dum = new ListNode(0), cur = dum;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;
  return dum.next;
};
/**
 * 复杂度分析：
 * 时间复杂度 O(M+N) ： M, N 分别为链表 l1, l2 的长度，合并操作需遍历两链表。
 * 空间复杂度 O(1) ： 节点引用 dum , cur 使用常数大小的额外空间。
 */
console.log(mergeTwoLists(linkList1.head, linkList2.head))