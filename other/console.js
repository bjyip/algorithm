// 变量保存
const orginFn = console.log
console.log = function() {
  orginFn(new Date() + ':', ...arguments)
}

// 自执行函数
console.log = (function(orginFn){
  return function() {
    orginFn(new Date() + ':', ...arguments)
  }
})(console.log)