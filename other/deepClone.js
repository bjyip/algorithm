function deepClone (source, hash = new WeakMap()) {
  if (typeof source !== 'object' || !source) return source
  // 查哈希表，处理循环引用，处理引用丢失
  if (hash.has(source)) return hash.get(source)
  const target = Array.isArray(source) ? [] : {}
  hash.set(source, target)
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = deepClone(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 我们常用的对象Object，是由key:value集合组成的，但key只能是字符串，有很大的使用限制。
// 当我们需要其他类型的数据做key值时，就需要用到数据结构Map，它支持把各种类型的值，当做键。

// WeakMap与Map类似，但有几点区别：
// 1、WeakMap只接受对象作为key，如果设置其他类型的数据作为key，会报错。
// 2、WeakMap的key所引用的对象都是弱引用，只要对象的其他引用被删除，垃圾回收机制就会释放该对象占用的内存，从而避免内存泄漏。
// 3、由于WeakMap的成员随时可能被垃圾回收机制回收，成员的数量不稳定，所以没有size属性。
// 4、没有clear()方法
// 5、不能遍历