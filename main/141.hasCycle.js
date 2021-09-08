// 环形链表
// 给定一个链表，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 如果链表中存在环，则返回 true 。 否则，返回 false 。

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var LinkList = require('../linkList/linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5, 3])

// 哈希表
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  var hash = new Map();
  while (head) {
    if (hash.has(head)) {
      return true;
    }
    hash.set(head);
    head = head.next;
  }
  return false;
}
/**
 * 复杂度分析：
 * 时间复杂度：O(N)，其中 N 是链表中的节点数。最坏情况下我们需要遍历每个节点一次。
 * 空间复杂度：O(N)，其中 N 是链表中的节点数。主要为哈希表的开销，最坏情况下我们需要将每个节点插入到哈希表中一次。
 */

// 双指针（快慢指针）
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  var slow = head, fast = head.next;
  while (fast && fast.next) {
    if (slow.val === fast.val) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false
};

var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }
  var slow = head, fast = head.next
  while (fast && fast.next) {
    if (slow.val === fast.val) {
      return true
    }
    solw = slow.next
    fast = fast.next.next
  }
  return false
}
/**
 * 复杂度分析：
 * 时间复杂度：O(N)，其中 N 是链表中的节点数。
 *   当链表中不存在环时，快指针将先于慢指针到达链表尾部，链表中每个节点至多被访问两次。
 *   当链表中存在环时，每一轮移动后，快慢指针的距离将减小一。而初始距离为环的长度，因此至多移动 NN 轮。
 * 空间复杂度：O(1)。我们只使用了两个指针的额外空间。
 */


console.log(hasCycle(linkList.head));
