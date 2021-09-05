Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError(this + '.myBind is not a function')
  }
  const self = this // 指向调用myBind的方法
  const Temp = function() {}
  const bound = function() {
    // 如果bound函数作为构造函数被new调用，this应该指向bound的实例
    self.apply(this instanceof Temp ? this : context || window, [...args, ...arguments])
  }
  // 维护原型关系
  Temp.prototype = self.prototype
  bound.prototype = new Temp()
  bound.prototype.constructor = self
  // 返回新函数
  return bound
}

// 原理：
// 1. bind()方法 返回一个新函数；新函数newFn 与被调用函数fn 具有相同的函数体。
// 2. Const newFn = fn.bind(context,arg1,arg2,..)：本质就是将fn方法添加到conetxt的属性中，
//  所以fn中的this就指向 context；即 context.fn()
//     1. context：当函数被调用时，该参数会作为原函数bind运行时的this指向；
//     2. 参数：之后的一序列参数将会在传递的实参前传入作为它的参数。
//     3. 注意：当bind方法返回的函数作为构造函数（使用new操作符调用绑定函数）的时候：bind执行时绑定的this会失效，但传入的参数依然生效。 
// 3. bind方法实现的思路：
//     1. bind 方法不会立即执行，需要返回一个待执行的函数；（闭包）
//     2. 使用apply实现作用域绑定和参数传递
//     1. 当返回的函数作为构造函数的时候，进行原型继承（让实例可以找到目标函原型上的方法）
// 4. 实际上bind里面使用的apply除了转移this的指向，也进行了原型链继承的操作