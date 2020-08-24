// 04. 二维数组中的查找

// 线性查找
var findNumberIn2DArray = function(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  var rows = matrix.length, cols = matrix[0].length;
  var row = 0, col = cols - 1;
  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return target;
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