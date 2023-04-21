// 实现event类，有on，off，emit，once方法
class EventEmitter {
  // 在事件被创建或者实例化的时候调用此方法
  constructor() {
    // 注册一个空对象
    this.events = {}
  }
  // 绑定事件函数
  on(type, cb) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push(cb)
  }
  // 触发事件
  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach(cb => {
        cb(...args)
      })
    }
  }
  // 停止监听某个事件
  off(type, cb) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter(fn => fn !== cb)
    }
  }
  // 单次监听函数
  once(type, cb) {
    const wrap = (...args) => {
      // 箭头函数没有arguments，所以需要用rest
      cb(...args)
      // 此处使用this.off，wrap要声明为箭头函数（或者在上一层暂存this），让this指向EventEmitter类，不然会指向undefined
      this.off(type, wrap)
    }
    this.on(type, wrap)
  }
}

const emitter = new EventEmitter()
emitter.once('a', (...args) => { console.log(...args) })
emitter.emit('a', 1,2,3)
emitter.emit('a', 1,2,3)