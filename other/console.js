// 变量保存
const orginFn = console.log
console.log = function() {
  orginFn(new Date() + ':', ...arguments)
}

// 自执行函数实现闭包保存变量
console.log = (function(orginFn){
  return function() {
    orginFn(new Date() + ':', ...arguments)
  }
})(console.log)