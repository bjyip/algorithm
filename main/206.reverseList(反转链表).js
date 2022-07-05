// 206. 反转链表
var LinkList = require('../linkList/linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])

// 双指针
// 假设链表为 1→2→3→∅，我们想要把它改成 ∅←1←2←3。
// 在遍历链表时，将当前节点的 next 指针改为指向前一个节点。
// 由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。
// 在更改引用之前，还需要存储后一个节点。最后返回新的头引用。
var reverseList = function(head) {
  if (!head) {
    return head;
  }
  var curr = head, prev = null;
  while (curr) {
    var tempNext = curr.next; // 暂存断掉的部分
    curr.next = prev;
    prev = curr;
    curr = tempNext; // 赋值断掉的部分，继续下一次迭代
  }
  return prev; // 最后curr为null时跳出while，故返回pre
};
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
 * 空间复杂度：O(1)。
 */

// 递归（未解决）
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