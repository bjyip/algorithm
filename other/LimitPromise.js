// 用js实现一个控制异步最大并发数的函数
class LimitPromise {
  constructor (limit) {
    this.limit = limit // 最大限制数
    this.count = 0 // 目前并发的数量
    this.taskQueue = [] // 如果并发数等于最大限制，则把新加的异步操作用数组存起来
  }
  // 利用promise包装传入的函数
  run(asyncFn, ...args) {
    return new Promise((resolve, reject) => {
      const task = this.createTask(asyncFn, args, resolve, reject)
      // 超出最大限制数时，把任务放入数组，每次执行完异步回调后就将操作按先入先出的顺序取出，然后执行，保证最大并发数在限制范围内。
      if (this.count >= this.limit) {
        this.taskQueue.push(task)
      } else {
        task()
      }
    })
  }
  // 创建任务
  createTask(asyncFn, args, resolve, reject) {
    return () => {
      asyncFn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          // return返回的函数执行后，this.count - 1
          this.count--
          // return返回的函数执行后，从taskQueue中取出任务继续执行（若有）
          if (this.taskQueue.length) {
            let task = this.taskQueue.shift()
            task()
          }
        })
      // return返回的函数执行时，this.count + 1
      this.count++
    }
  }
}

let limitP = new LimitPromise(3)
function sleep(sec) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('等待了' + sec + '秒')
			resolve()
		}, sec * 1000)
	})
} 
limitP.run(sleep, 1) // 1秒后打印
limitP.run(sleep, 2) // 2秒后打印
limitP.run(sleep, 3) // 3秒后打印
limitP.run(sleep, 4) // 5秒后打印 1 + 4
limitP.run(sleep, 5) // 7秒后打印 2 + 5
limitP.run(sleep, 6) // 9秒后打印 3 + 6