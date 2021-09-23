// 146. LRU 缓存机制
// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，
// 则插入该组「关键字-值」。当缓存容量达到上限时，
// 它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 
// 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

/*
// put
if key 存在:
  更新节点值
  把节点移到链表头部
else:
  if 缓存满了:
    移除最后一个节点
    删除它在哈希表中的映射

  新建一个节点
  在哈希表中增加映射
  把节点加到链表头部

// get
if key 存在:
  返回节点值
  把节点移到链表头部
else:
  返回 -1
*/

var DoubleLinkedListNode = function(key, value) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity
  this.size = 0
  // Mappings of key->node.
  this.hashmap = {}

  this.dummyHead = new DoubleLinkedListNode(null, null)
  this.dummyTail = new DoubleLinkedListNode(null, null)
  this.dummyHead.next = this.dummyTail
  this.dummyTail.prev = this.dummyHead
};

LRUCache.prototype._isFull = function() {
  return this.size === this.capacity
}

LRUCache.prototype._removeNode = function(node) {
  node.prev.next = node.next
  node.next.prev = node.prev
  node.prev = null
  node.next = null
  return node
}

LRUCache.prototype._addToHead = function(node) {
  const head = this.dummyHead.next
  node.next = head
  head.prev = node
  node.prev = this.dummyHead
  this.dummyHead.next = node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (key in this.hashmap) {
    const node = this.hashmap[key]
    this._addToHead(this._removeNode(node))
    return node.value
  }
  else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (key in this.hashmap) {
    // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部
    const node = this.hashmap[key]
    node.value = value
    this._addToHead(this._removeNode(node))
  }else {
    // 如果key不存在
    if (this._isFull()) {
      // 如果超出容量，删除双向链表的尾部节点
      const node = this.dummyTail.prev
      delete this.hashmap[node.key]
      this._removeNode(node)
      this.size--
    }
    //创建一个新的节点并添加至双向链表的头部
    const node = new DoubleLinkedListNode(key, value)
    this.hashmap[key] = node
    this._addToHead(node)
    this.size++
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */