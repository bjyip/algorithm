function debounce(fn, wait) {
  var timer = null
  return function() {
    timer = setInterval(() => {
      clearInterval(timer)
      fn.apply(this, arguments)
    }, wait);
  }
}

// 1. this：是被return的匿名函数的this，指向调用【执行debounce方法后返回的方法】的对象。
// 2. arguments：是被return的匿名函数的参数，是调用【执行debounce方法后返回的方法】时传入的参数。

