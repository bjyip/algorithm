var mySqrt = function(x) {
  var left = 0, right = x;
  while (left <= right) {
    var middle = parseInt((left + right) / 2);
    if (middle * middle === x) {
      return middle;
    }
    if (middle * middle < x) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return right;
};
console.log(mySqrt(8))