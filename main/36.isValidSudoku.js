var isValidSudoku = function(board) {
  var rows = {};
  var cols = {};
  var boxs = {};
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var num = board[i][j];
      if (num !== '.') {
        var boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
        if (rows[i + '-' + num] || cols[j + '-' + num] || boxs[boxIndex + '-' + num]) {
          return false;
        }
        rows[i + '-' + num] = true;
        cols[j + '-' + num] = true;
        boxs[boxIndex + '-' + num] = true;
      }
    } 
  }
  return true;
}
/**
 * 复杂度分析
 * 时间复杂度：O(1)，因为我们只对 81 个单元格进行了一次迭代。
 * 空间复杂度：O(1)。
 */

console.log(isValidSudoku([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]]))