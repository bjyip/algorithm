/**
 * 50.第一个只出现一次的字符
 * @param {string} s
 * @return {character}
 */
// hash
var firstUniqChar = function(s) {
  var hash = {};
  for (var i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }
  for (var i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return s[i];
    }
  }
  return ' ';
};

// Map
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
console.log(firstUniqChar("cbabcdeff"))