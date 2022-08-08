// 22. 链表中倒数第k个节点

// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

// 顺序查找
var getKthFromEnd = function(head, k) {
  let node = head, n = 0;
  while (node) {
    node = node.next;
    n++;
  }
  node = head;
  for (let i = 0; i < n - k; i++) {
    node = node.next;
  }
  return node; 
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 其中 n 为链表的长度。需要两次遍历。
 * 空间复杂度 O(1)。
 */

/**
 * 思路与算法
 * 最简单直接的方法即为顺序查找，假设当前链表的长度为 n，则我们知道链表的倒数第 k 个节点即为正数第 n - k 个节点，此时我们只需要顺序遍历到链表的第 n - k 个节点即为倒数第 k 个节点。
 * 我们首先求出链表的长度 n，然后顺序遍历到链表的第 n - k 个节点返回即可。
 */


// 双指针
 var getKthFromEnd = function(head, k) {
  let fast = head, slow = head;
  
  while (fast && k > 0) {
    fast = fast.next
    k--
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow;
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 其中 n 为链表的长度。我们使用快慢指针，只需要一次遍历即可，复杂度为 O(n)。
 * 空间复杂度 O(1)。
 */