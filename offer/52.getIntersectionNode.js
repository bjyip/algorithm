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
 * 52.两个链表的第一个公共节点
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 暴力循环
var getIntersectionNode = function(headA, headB) {
  while (headA) {
    var temp = headB;
    while (temp) {
      if (JSON.stringify(headA) === JSON.stringify(temp)) {
        return headA;
      }
      temp = temp.next;
    }
    headA = headA.next;
  }
  return null;
};
/**
 * 复杂度分析
 * 时间复杂度: (mn)。
 * 空间复杂度: O(1)。
 * 
 * 注意
 * 链表嵌套循环中里层要用temp保存里层链表，保证外层循环中里层链表的一致
 */

// 哈希表法
var getIntersectionNode = function(headA, headB) {
  var hash = new Set();
  while (headA) {
    hash.add(headA);
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
 * 时间复杂度 :O(m+n)。
 * 空间复杂度 :O(m) 或 O(n)。
 */

// 标记法
var getIntersectionNode = function(headA, headB) {
  while (headA) {
    headA.sign = true;
    headA = headA.next;
  }
  while (headB) {
    if (headB.sign) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
}
/**
 * 复杂度分析
 * 时间复杂度 :O(m+n)。
 * 空间复杂度 :O(1)。
 */

// 双指针
var getIntersectionNode = function(headA, headB) {
  var tA = headA, tB = headB;
  while (JSON.stringify(pA) !== JSON.stringify(pB)) {
    tA = tA ? tA.next : headB;
    tB = tB ? tB.next : headA;
  }
  return tA;
}
console.log(getIntersectionNode(linkList1.head, linkList2.head));