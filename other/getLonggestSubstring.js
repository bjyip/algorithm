// 求字符串中无重复字符的最长子串
function getLonggestSubstring(s) {
  let left = 0 // 字符串左指针
  let right = 1 // 字符串右指针
  let cur = '' // 滑动窗口
  let str = '' // 最长字串
  while (right < s.length) {
    cur = s.slice(left, right)
    if (cur.includes(s[right])) {
      // 滑动窗口中存在当前字符，左指针前移，切掉原字符串第一个字符
      left++
      continue
    } else {
      // 滑动窗口中不存在当前字符，右指针前移，切掉原字符串第一个字符
      cur += s[right]
      right++
    }
    str = str.length > cur.length ? str : cur
  }
  return str
}

console.log(getLonggestSubstring('abcdfcabdefghijd'))