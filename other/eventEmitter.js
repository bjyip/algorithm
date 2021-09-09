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
    const wrap = function(...args) {
      cb(...args)
      this.off(type, wrap)
    }
    this.on(type, wrap)
  }
}