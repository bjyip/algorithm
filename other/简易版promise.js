function MyPromise(fn) {
  const _this = this
  _this.state = 'pending' // 状态
  _this.value = undefined // 保存 resolve 或者 reject 中传入的值
  _this.resolvedCallbacks = [] // 保存 then 中的回调
  _this.rejectedCallbacks = [] // 保存 catch 中的回调

  function resolve(value) {
    if (_this.state === 'pending') {
      _this.state = 'resolved'
      _this.value = value
      // 成功后把放到数组中的回调执行,并传入成功的值
      _this.resolvedCallbacks.forEach(cb => cb(_this.value))
    }
  }
  function reject(value) {
    if (_this.state === 'pending') {
      _this.state = 'rejected'
      _this.value = value
      // 失败后把放到数组中的回调执行,并传入失败的原因
      _this.rejectedCallbacks.forEach(cb => cb(_this.value))
    }
  }
  // 执行 Promise 中传入的函数
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const _this = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
  onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
  if (_this.state === 'pending') {
    _this.resolvedCallbacks.push(onFulfilled)
    _this.rejectedCallbacks.push(onRejected)
  }
  if (_this.state === 'resolved') {
    onFulfilled(_this.value)
  }
  if (_this.state === 'rejected') {
    onRejected(_this.value)
  }
}

new MyPromise((resolve, reject) => {
  resolve('resolve')
}).then(res => {
  console.log(res)
})