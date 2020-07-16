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