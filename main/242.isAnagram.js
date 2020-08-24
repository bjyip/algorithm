// 有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 快排
var quickSort = function (arr) {
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
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return quickSort(s.split('')).join('') === quickSort(t.split('')).join('');
};
/**
 * 复杂度分析
 * 时间复杂度：O(nlogn)，假设 nn 是 ss 的长度，排序成本 O(nlogn) 和比较两个字符串的成本 O(n)。排序时间占主导地位，总体时间复杂度为 O(nlogn)。
 * 空间复杂度：O(1)，空间取决于排序实现，如果使用 heapsort，通常需要 O(1) 辅助空间。注意，在 Java 中，toCharArray() 制作了一个字符串的拷贝，所以它花费 O(n) 额外的空间，但是我们忽略了这一复杂性分析，因为：
 *   这依赖于语言的细节。
 *   这取决于函数的设计方式。例如，可以将函数参数类型更改为 char[]。
 */

// 哈希表1
var isAnagram = function (s, t) {
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
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
      return false;
  }
  var hash = {};
  for (i = 0; i < s.length; i++) {
      hash[s[i]] ? hash[s[i]]++ : hash[s[i]] = 1;
  }
  for (i in t) {
      hash[t[i]] ? hash[t[i]]-- : hash[t[i]] = -1;
      if (hash[t[i]] < 0) {
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