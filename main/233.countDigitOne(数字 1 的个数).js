// 233. 数字 1 的个数
// 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

var countDigitOne = function(n) {
  // mulk 表示 10^k
  // 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）
  // 但为了让代码看起来更加直观，这里保留了 k
  let mulk = 1;
  let ans = 0;
  for (let k = 0; n >= mulk; ++k) {
    ans += (Math.floor(n / (mulk * 10))) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk);
    mulk *= 10;
  }
  return ans;
}
/**
 * 复杂度分析
 * 时间复杂度：O(logn)。n 包含的数位个数与 n 呈对数关系。
 * 空间复杂度：O(1)。
 */