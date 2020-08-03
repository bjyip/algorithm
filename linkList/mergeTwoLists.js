
var LinkList = require('./linkList').LinkList
var linkList1 = new LinkList();
var linkList2 = new LinkList();
linkList1.appendBatch([1, 2, 4])
linkList2.appendBatch([1, 3, 4])
var ListNode = require('./linkList').ListNode
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
console.log(mergeTwoLists(linkList1.head, linkList2.head))