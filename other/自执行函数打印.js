var name = 'weihui';
(function () {
  if (typeof name === 'undefined') {
    var name = 'bigo';
    console.log('good' + name);
  } else {
    console.log('Hello' + name);
  }
})()






/**
 * 解析：
 * 1.匿名函数里的var name = 'bigo'会变量提升，故typeof name === 'undefined'成立。
 * 2.此处使用自执行匿名函数是为了让里面的代码存在函数作用域，从而可以使里面的变量提升，而不是为了让自执行函数提升。
 * 3.用function来声明变量才会提升，如果外面包着自执行函数只会变量提升不会立即执行。
 * 4.题目中的匿名函数只是用来混淆视听，可以看作普通函数：
 */
// 
// var name = 'weihui';
// function fn() {
//   if (typeof name === 'undefined') {
//     var name = 'bigo';
//     console.log('good' + name);
//   } else {
//     console.log('Hello' + name);
//   }
// }
// fn()
