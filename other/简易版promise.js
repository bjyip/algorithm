// Promise是一个状态机的机制，初始状态为 pending，成功状态为 fulfilled，失败状态为 rejected。
// 只能从 pending -> fulfilled，或者从 pending -> rejected，并且状态一旦转变，就永远不会再变了。
function MyPromise(fn) {
  const _this = this
  _this.state = 'pending' // 状态
  _this.value = undefined // 保存 resolve 或者 reject 中传入的值
  _this.resolvedCallbacks = [] // 保存所有 then 中的回调
  _this.rejectedCallbacks = [] // 保存所有 catch 中的回调

  // 私有函数：将promise的状态从pending更改为fulfilled，并且以value为参数依次调用then方法中注册的回调
  function resolve(value) {
    if (_this.state === 'pending') {
      _this.state = 'fulfilled'
      _this.value = value
      // 成功后遍历执行then数组中的回调函数,并传入成功的值
      _this.resolvedCallbacks.forEach(cb => cb(_this.value))
    }
  }
  // 私有函数：将promise的状态从pending更改为rejected，并且以value为参数依次调用catch方法中注册的回调
  function reject(value) {
    if (_this.state === 'pending') {
      _this.state = 'rejected'
      _this.value = value
      // 失败后遍历执行catch数组中的回调函数,并传入失败的原因
      _this.rejectedCallbacks.forEach(cb => cb(_this.value))
    }
  }
  // 执行 MyPromise 中传入的函数，并入参两个私有方法给函数使用
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// promise实例的then方法
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const _this = this
  // promise实例执行then函数的时候传入两个回调函数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
  onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

  // 如果当前状态是pending，则把两个回调函数加入对应的数组中
  if (_this.state === 'pending') {
    _this.resolvedCallbacks.push(onFulfilled)
    _this.rejectedCallbacks.push(onRejected)
  }
  // 如果当前状态是fulfilled，则直接执行onFulfilled函数
  if (_this.state === 'fulfilled') {
    onFulfilled(_this.value)
  }
  // 如果当前状态是rejected，则直接执行onRejected函数
  if (_this.state === 'rejected') {
    onRejected(_this.value)
  }
}

// promise实例的catch方法
// catch 方法是 then 方法的语法糖，只接受 rejected 态的数据。
MyPromise.prototype.catch = function(failCallback) {
  return this.then(undefined, failCallback)
}

// promise实例的finally方法，不管成功还是失败都要执行finally方法。
// 在finally方法要返回一个promise对象并且状态与之前调用的Promise对象一样。
// 调用finally传入的callback函数，callback不论返回什么，都转换为Promise对象，并且与当前调用对象的状态值是一样的。
MyPromise.prototype.finally = function(callback) {
  // 利用then的第一个参数实现成功的回调，then的第二个参数实现失败的回调
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