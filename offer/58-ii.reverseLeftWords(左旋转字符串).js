/**
 * 58-ii.左旋转字符串
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 * 请定义一个函数实现字符串左旋转操作的功能。
 * 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 方法一：字符串切片（最优解）
var reverseLeftWords = function(s, n) {
  return s.substring(n) + s.substring(0, n)
};
/**
 * 复杂度分析：
 * 时间复杂度 O(N)： 其中 N 为字符串 s 的长度，字符串切片函数为线性时间复杂度（参考资料）；
 * 空间复杂度 O(N)： 两个字符串切片的总长度为 N
 * 
 * 新建两切片字符串，并将两切片拼接为结果字符串，无冗余操作，效率最高。
 */

// 方法二：列表遍历拼接（若不允许使用 切片函数 ，则使用此方法。）
var reverseLeftWords = function(s, n) {
  var res = [];
  for (let i = n; i < s.length; i++) {
    res.push(s[i]);
  }
  for (let i = 0; i < n; i++) {
    res.push(s[i]);
  }
  return res.join('');
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 线性遍历 s 并添加，使用线性时间；
 * 空间复杂度 O(N) ： 新建的辅助 resres 使用 O(N) 大小的额外空间。
 * 
 * 列表(Python) 和 StringBuilder(Java) 都是可变对象，每轮遍历拼接字符时，只是向列表尾部添加一个新的字符元素。最终拼接转化为字符串时，系统 仅申请一次内存 。
 */

// 方法三：字符串遍历拼接（若规定 Python 不能使用 join() 函数，或规定 Java 只能用 String ，则使用此方法。）
var reverseLeftWords = function(s, n) {
  var res = '';
  for (let i = n; i < s.length; i++) {
    res += s[i]
  }
  for (let i = 0; i < n; i++) {
    res += s[i]
  }
  return res;
}
/**
 * 复杂度分析：
 * 时间复杂度 O(N) ： 线性遍历 s 并添加，使用线性时间；
 * 空间复杂度 O(N) ： 假设循环过程中内存会被及时回收，内存中至少同时存在长度为 N 和 N−1 的两个字符串（新建长度为 N 的 resres 需要使用前一个长度 N−1 的 resres ），因此至少使用 O(N) 的额外空间。
 * 
 * 在 Python 和 Java 中，字符串是 “不可变对象” 。因此，每轮遍历拼接字符时，都需要新建一个字符串；因此，系统 需申请 N 次内存 ，数据量较大时效率低下。
 */
console.log(reverseLeftWords("abcdefg", 2));