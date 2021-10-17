// Promise是一个状态机的机制，初始状态为 pending，成功状态为 fulfilled，失败状态为 rejected。
// 只能从 pending -> fulfilled，或者从 pending -> rejected，并且状态一旦转变，就永远不会再变了。
function MyPromise(fn) {
  const _this = this
  _this.state = 'pending' // 状态
  _this.value = undefined // 保存 resolve 或者 reject 中传入的值
  _this.resolvedCallbacks = [] // 保存 then 中的回调
  _this.rejectedCallbacks = [] // 保存 catch 中的回调

  // 将promise的状态从pending更改为fulfilled，并且以value为参数依次调用then方法中注册的回调（2.1）
  function resolve(value) {
    setTimeout(() => {
      if (_this.state === 'pending') {
        _this.state = 'fulfilled'
        _this.value = value
        // 2.2.2、2.2.6
        _this.resolvedCallbacks.forEach(cb => cb(_this.value))
      }
    }, 0)
  }
  // 将promise的状态从pending更改为rejected，并且以value为参数依次调用then方法中注册的回调（2.1）
  function reject(value) {
    setTimeout(() => {
      if (_this.state === 'pending') {
        _this.state = 'rejected'
        _this.value = value
        // 2.2.2、2.2.6
        _this.rejectedCallbacks.forEach(cb => cb(_this.value))
      }
    }, 0)
  }
  // 执行 Promise 中传入的函数
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
// promise实例的then方法
// 规范2.2 promise 必须提供一个 then 方法 promise.then(onFulfilled,onRejected)
// 规范2.2.7 then 方法必须返回一个新的promise
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const _this = this
  let promise2
  // 2.2.1、2.2.5
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
  onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
  // 执行then的时候，异步操作，state仍为pending，把回调保存到数组中
  if (_this.state === 'pending') {
    return promise2 = new Promise((resolve, reject) => {
      _this.resolvedCallbacks.push(() => {
        try {
          // x可能是一个promise，也可能是个普通值
          const x = onFulfilled(_this.value)
          promiseResolution(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
      _this.rejectedCallbacks.push(() => {
        try {
          // x可能是一个promise，也可能是个普通值
          const x = onRejected(_this.value)
          promiseResolution(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  if (_this.state === 'fulfilled') {
    return promise2 = new Promise((resolve, reject) => {
      // 传入的函数的函数体需要异步执行，这也是规范规定的
      setTimeout(() => {
        try {
          // x可能是一个promise，也可能是个普通值
          const x = onFulfilled(_this.value)
          promiseResolution(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    })
  }
  if (_this.state === 'rejected') {
    return promise2 = new Promise((resolve, reject) => {
      // 传入的函数的函数体需要异步执行，这也是规范规定的
      setTimeout(() => {
        try {
          // x可能是一个promise，也可能是个普通值
          const x = onRejected(_this.value)
          promiseResolution(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    })
  }
}

// PromiseResolutionProcedure：Promise 解决过程，兼容多种 Promise 的函数
function promiseResolution (promise2, x, resolve, reject) {
  let then
  let thenCalled = false
  // 2.3.1 返回的promise实例是自己本身，会发生循环引用，报错
  if (promise2 === x) {
    return reject(new TypeError('promise2 === x is not allowed'))
  }
  // 2.3.2 如果 x 为 promise ，则使 promise 接受 x 的状态
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  }
  // 2.3.3 如果 x 为对象或者函数，判断 x.then 是否是函数、 如果 x 不为对象或者函数，以 x 为参数执行 promise
  if (typeof x === 'object' || typeof x === 'function') {
    try {
      // 2.3.3.1
      then = x.then
      if (typeof then === 'function') {
        // 2.3.3.2
        then.call(x, function resolvePromise(y) {
          // 2.3.3.3.3
          if (thenCalled) return
          thenCalled = true
          // 2.3.3.3.1
          return promiseResolution(promise2, y, resolve, reject)
        }, function rejectPromise(r) {
          // 2.3.3.3.3
          if (thenCalled) return
          thenCalled = true
          // 2.3.3.3.2
          return reject(r)
        })
      } else {
        // 2.3.3.4
        resolve(x)
      }
    } catch(e) {
      // 2.3.3.3.4.1
      if (thenCalled) return
      thenCalled = true
      // 2.3.3.2
      reject(e)
    }
  } else {
    // 2.3.4
    resolve(x)
  }
}

// promise实例的catch方法
// catch 方法是 then 方法的语法糖，只接受 rejected 态的数据。
MyPromise.prototype.catch = function(failCallback) {
  return this.then(undefined, failCallback)
}

// promise实例的finally方法
// 不管成功还是失败都要执行finally方法。
// 在finally方法要返回一个promise对象并且状态与之前调用的Promise对象一样。
// 调用finally传入的callback函数，callback不论返回什么，都转换为Promise对象，并且与当前调用对象的状态值是一样的。
MyPromise.prototype.finally = function(callback) {
  return this.then(data => {
    return MyPromise.resolve(callback()).then(() => data)
  }, err => {
    return MyPromise.resolve(callback()).then(() => {throw err})
  })
}


new MyPromise((resolve, reject) => {
  resolve('resolve')
}).then(res => {
  console.log(res)
})