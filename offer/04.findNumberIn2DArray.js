// 04. 二维数组中的查找

// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 示例:
// 现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
// 给定 target = 5，返回 true。
// 给定 target = 20，返回 false。


// 线性查找
var findNumberIn2DArray = function(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  var rows = matrix.length, cols = matrix[0].length;
  var row = 0, col = cols - 1;
  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++
    }
  }
  return false
};
/**
 * 复杂度分析
 * 时间复杂度：O(n+m)。访问到的下标的行最多增加 n 次，列最多减少 m 次，因此循环体最多执行 n + m 次。
 * 空间复杂度：O(1)。
 */