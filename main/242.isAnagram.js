// 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 快排
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var leftArr = [], rightArr = [];
  var midIndex = Math.floor(arr.length / 2);
  var midVal = arr.splice(midIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < midVal) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat(midVal, quickSort(rightArr));
}
// 排序
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return quickSort(s.split('')).join('') === quickSort(t.split('')).join('');
};
/**
 * 复杂度分析
 * 时间复杂度：O(nlogn)，假设 n 是 s 的长度，排序成本 O(nlogn) 和比较两个字符串的成本 O(n)。排序时间占主导地位，总体时间复杂度为 O(nlogn)。
 * 空间复杂度：O(nlogn)，排序需要 O(logn) 的空间复杂度空间，取决于排序实现。
 * 注意，在某些语言（比如 Java & JavaScript）中字符串是不可变的，因此我们需要额外的 O(n) 的空间来拷贝字符串。
 * 但是我们忽略这一复杂度分析，因为：
 *   这依赖于语言的细节。
 *   这取决于函数的设计方式。例如，可以将函数参数类型更改为 char[]。
 */

// 哈希表1
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var hash = {};
  for (i = 0; i < s.length; i++) {
    hash[s[i]] ? hash[s[i]]++ : hash[s[i]] = 1;
    hash[t[i]] ? hash[t[i]]-- : hash[t[i]] = -1;
  }
  for (i in hash) {
    if (hash[i] !== 0) {
      return false;
    }
  }
  return true;
}

// 哈希表2
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var hash = {};
  for (i = 0; i < s.length; i++) {
    hash[s[i]] ? hash[s[i]]++ : hash[s[i]] = 1;
  }
  for (i = 0; i < t.length; i++) {
    hash[t[i]] ? hash[t[i]]-- : hash[t[i]] = -1;
    if (hash[t[i]] < 0) { // s中无，t中有
      return false;
    }
  }
  return true;
}
/**
 * 复杂度分析
 * 时间复杂度：O(n)。时间复杂度为 O(n) 因为访问计数器表是一个固定的时间操作。
 * 空间复杂度：O(1)。尽管我们使用了额外的空间，但是空间的复杂性是 O(1)，因为无论 N 有多大，表的大小都保持不变。
 */

console.log(isAnagram("anagram", "nagaram"))