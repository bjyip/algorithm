// 每3秒打印一个helloworld，总计执行4次

// 简单实现
function repeat() {
  var count = 0
  var interval = setInterval(function () {
    count += 1
    console.log('helloworld')
    if (count === 4) {
      clearInterval(interval)
    }
  }, 3000)
}
repeat()

// 封装实现
function repeat(fn, times, timeout) {
  return function (content) {
    var count = 0
    var interval = setInterval(function () {
      count += 1
      fn(content)
      if (count == times) {
        clearInterval(interval)
      }
    }, timeout)
  }
}
const repeatFunc = repeat(console.log, 4, 3000);

repeatFunc("helloworld");

