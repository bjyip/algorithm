// 06. 从尾到头打印链表

var LinkList = require('../linkList/linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3])

// 数组
var reversePrint = function(head) {
  if (!head) {
    return [];
  }
  var arr = [];
  while (head) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr;
};
/**
 * 复杂性分析
 * 时间复杂度：O(n)。正向遍历一遍链表，然后从栈弹出全部节点，等于又反向遍历一遍链表。
 * 空间复杂度：O(n)。额外使用一个栈存储链表中的每个节点。
 */

// 递归
var reversePrint = function(head) {
  if (!head) {
    return [];
  }
  var arr = reversePrint(head.next);
  arr.push(head.val);
  return arr;
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N)： 遍历链表，递归 N 次。
 * 空间复杂度 O(N)： 系统递归需要使用 O(N) 的栈空间。
 */
console.log(reversePrint(linkList.head));