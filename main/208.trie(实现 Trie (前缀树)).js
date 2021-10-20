// 208. 实现 Trie (前缀树)

var TrieNode = function() {
  this.next = {};
  this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  if (!word) {
    return false;
  }
  var node = this.root;
  for (var i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode();
    }
    node = node.next[word[i]];
  }
  node.isEnd = true;
  return node.isEnd;
};
/**
 * 复杂度分析
 * 时间复杂度：O(m)，其中 mm 为键长。在算法的每次迭代中，我们要么检查要么创建一个节点，直到到达键尾。只需要 m 次操作。
 * 空间复杂度：O(m)。最坏的情况下，新插入的键和 Trie 树中已有的键没有公共前缀。此时需要添加 m 个结点，使用 O(m) 空间。
 */

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  if (!word) {
    return false;
  }
  var node = this.root;
  for (var index = 0; index < word.length; index++) {
    if (node.next[word[i]]) {
      node = node.next[word[i]];
    } else {
      return false;
    }
  }
  return node.isEnd;
};
/**
 * 复杂度分析
 * 时间复杂度 : O(m)。算法的每一步均搜索下一个键字符。最坏的情况下需要 m 次操作。
 * 空间复杂度 : O(1)。
 */

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  if (!word) {
    return false;
  }
  var node = this.root;
  for (var index = 0; index < word.length; index++) {
    if (node.next[word[i]]) {
      node = node.next[word[i]];
    } else {
      return false;
    }
  }
  return true;
};
/**
 * 复杂度分析
 * 时间复杂度 : O(m)。
 * 空间复杂度 : O(1)。
 */

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */