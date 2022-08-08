// 88. 合并两个有序数组
// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

// 直接合并后排序
var merge1 = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};
/**
 * 复杂度分析
 * 时间复杂度：O((m+n)log(m+n))。
 * 排序序列长度为 m+n，套用快速排序的时间复杂度即可，平均情况为 O((m+n)log(m+n))。
 * 空间复杂度：O(log(m+n))。
 * 排序序列长度为 m+n，套用快速排序的空间复杂度即可，平均情况为 O(log(m+n))。
 */

// 双指针
// 方法一没有利用数组 nums1 与 nums2 已经被排序的性质。为了利用这一性质，我们可以使用双指针方法。
// 这一方法将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中。
// 我们为两个数组分别设置一个指针 p1 与 p2 来作为队列的头部指针。
var merge2 = function(nums1, m, nums2, n) {
  let p1 = 0, p2 = 0;
  const sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {
    if (p1 === m) { // nums1已经取完，直接取nums2
      cur = nums2[p2];
      p2++
    } else if (p2 === n) { // nums2已经取完，直接取nums1
      cur = nums1[p1];
      p1++
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1];
      p1++
    } else {
      cur = nums2[p2];
      p2++
    }
    sorted[p1 + p2 - 1] = cur; // 因为上面赋值后p1/p2 +1了，所以需要-1
  }
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i];
  }
};
/**
 * 复杂度分析
 * 时间复杂度：O(m+n)。
 * 指针移动单调递增，最多移动 m+nm+n 次，因此时间复杂度为 O(m+n)。
 * 空间复杂度：O(m+n)。
 * 需要建立长度为 m+n 的中间数组 sorted。
 */


// 逆向双指针（未解决）
var merge3 = function(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1;
  var cur;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
};
/**
 * 复杂度分析
 * 时间复杂度：O(m+n)。
 * 指针移动单调递减，最多移动 m+n 次，因此时间复杂度为 O(m+n)。
 * 空间复杂度：O(1)
 * 直接对数组 nums1 原地修改，不需要额外空间。
 */

// 不修改原来数组的合并
function merge4(nums1, nums2) {
  var p1 = 0, p2 = 0, cur, res = []
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p1]) {
      cur = nums1[p1]
      p1++
    } else {
      cur = nums2[p2]
      p2++
    }
    res.push(cur)
  }
  if (p1 === nums1.length) {
    res.push(...nums2.slice(p2))
  } else {
    res.push(...nums1.slice(p1))
  }
  return res
}
console.log(merge4([1,2,3], [2,5,6,7,8,9]))
console.log('-----------------')

var nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6,7,8,9], n = 6
merge2(nums1, m, nums2, n)
console.log(nums1)