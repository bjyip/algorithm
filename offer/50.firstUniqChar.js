 // 50.第一个只出现一次的字符
 // 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

/**
 * @param {string} s
 * @return {character}
 */
// 使用哈希表存储频数
var firstUniqChar = function(s) {
  var hash = new Map();
  for (var i = 0; i < s.length; i++) {
    if (hash.get(s[i])) {
      hash.set(s[i], (hash.get(s[i]) + 1))
    } else {
      hash.set(s[i], 1)
    }
  }
  for (const [key, value] of hash) {
    if (value === 1) {
      return key;
    }
  }
  return ' ';
};

// 使用哈希表存储索引
var firstUniqChar = function(s) {
  const position = new Map();
  const n = s.length;
  for (let [i, ch] of Array.from(s).entries()) {
    if (position.has(ch)) {
      position.set(ch, -1);
    } else {
      position.set(ch, i);
    }
  }
  let first = n;
  for (let pos of position.values()) {
    if (pos !== -1 && pos < first) {
      first = pos;
    }
  }
  return first == n ? ' ' : s[first];
};
console.log(firstUniqChar("cbabcdeff"))