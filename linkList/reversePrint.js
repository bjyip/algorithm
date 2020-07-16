var LinkList = require('./linkList').LinkList
var linkList = new LinkList();
linkList.appendBatch([1, 2, 3])

// 数组
// var reversePrint = function(head) {
//   if (!head) {
//     return [];
//   }
//   var arr = [];
//   while (head) {
//     arr.unshift(head.val);
//     head = head.next;
//   }
//   return arr;
// };

// 递归
var reversePrint = function(head) {
  if (!head) {
    return [];
  }
  var arr = reversePrint(head.next);
  arr.push(head.val);
  return arr;
};
console.log(reversePrint(linkList.head));