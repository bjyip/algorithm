// 52.两个链表的第一个公共节点
// 输入两个链表，找出它们的第一个公共节点。

// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var LinkList = require('../linkList/linkList').LinkList
var linkList1 = new LinkList();
var linkList2 = new LinkList();
linkList1.appendBatch([4,1,8,4,5])
linkList2.appendBatch([5,6,1,8,4,5])

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 哈希表法
var getIntersectionNode = function(headA, headB) {
  var hash = new Map();
  while (headA) {
    hash.set(headA);
    headA = headA.next;
  }
  while (headB) {
    if (hash.has(headB)) {
      return headB
    }
    headB = headB.next;
  }
  return null;
}
/**
 * 复杂度分析
 * 时间复杂度：O(m+n)，其中 m 和 n 是分别是链表 headA 和 headB 的长度。需要遍历两个链表各一次。
 * 空间复杂度：O(m)，其中 m 是链表 headA 的长度。需要使用哈希集合存储链表 headA 中的全部节点。
 */

// 双指针
var getIntersectionNode = function(headA, headB) {
  var pA = headA, pB = headB;
  while (JSON.stringify(pA) !== JSON.stringify(pB)) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  return pA;
}

/**
 * 复杂度分析
 * 时间复杂度：O(m+n)，其中 m 和 n 是分别是链表 headA 和 headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次。
 * 空间复杂度：O(1)。
 */
console.log(getIntersectionNode(linkList1.head, linkList2.head));