// 计算x的n次幂函数

// 快速幂 + 递归
function quickMul(x, n) {
  if (n === 0) {
    return 1;
  }
  var y = quickMul(x, Math.floor(n / 2));
  return n % 2 === 0 ? y * y : y * y * x;
}
var myPow = function(x, n) {
  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};
// 单函数递归
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n % 2) {
    return x * myPow(x, n - 1)
  }
  return myPow(x * x, n / 2)
};
/**
 * 复杂度分析
 * 时间复杂度：O(logn)，即为递归的层数。
 * 空间复杂度：O(logn)，即为递归的层数。这是由于递归的函数调用会使用栈空间。
 * 
 * 边界值
 * n < 0，计算 x^(−n)再取倒数
 * n % 2 === 1，奇数，需另外乘x
 * n === 0，终止条件
 */

// 快速幂 + 迭代
var quickMul = function(x, n) {
  var res = 1, x_contribute = x;
  while (n > 0) {
    if (n % 2 === 1) {
      res *= x_contribute;
    }
    x_contribute *= x_contribute;
    n = Math.floor(n / 2);
  }
  return res;
}
var myPow = function(x, n) {
  return n > 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
}
// 单函数迭代
var myPow = function(x, n) {
  if (n === 0) {
      return 1;
  }
  if (n < 0) {
      x = 1 / x;
      n = -n;
  }
  var sum = 1;
  while (n > 1) {
      if (n % 2) {
          sum *= x;
          n--
      } else {
          x *= x;
          n = n / 2
      }
  }
  return sum * x;
}
/**
 * 复杂度分析
 * 时间复杂度：O(logn)，即为对 n 进行二进制拆分的时间复杂度。
 * 空间复杂度：O(1)。
 * 
 * 边界值
 * n < 0，计算 x^(−n)再取倒数
 * n % 2 === 1，奇数，需另外乘x
 * n === 0，终止条件
 */

console.log(myPow(2, 5))