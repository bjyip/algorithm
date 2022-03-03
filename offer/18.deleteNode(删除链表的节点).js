// 18. 删除链表的节点

var LinkList = require('../linkList/linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3, 4, 5])

var deleteNode = function(head, val) {
  if (!head) return null
  if (head.val === val) return head.next
  var cur = head
  while (cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      return head
    }
    cur = cur.next
  }
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： N 为链表长度，删除操作平均需循环 N/2 次，最差 N 次。
 * 空间复杂度 O(1) ： cur, pre 占用常数大小额外空间。
 */

console.log(deleteNode(linkList.head, 5))