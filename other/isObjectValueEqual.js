// 判断两个对象是否相等
function isObjectValueEqual(obj1, obj2) {
	// 判断两个对象是否指向同一内存，指向同一内存返回 true
	if (obj1 === obj2) return true
  // 获取两个对象键值数组
	let aProps = Object.keys(obj1)
	let bProps = Object.keys(obj2)
	// 判断两个对象键值数组长度是否一致，不一致返回 false
	if (aProps.length !== bProps.length) return false
  // 遍历对象的键值
	for (let prop in obj1) {
		// 判断 obj1 的键值，在 obj2 中是否存在，不存在，返回 false
		if (obj2.hasOwnProperty(prop)) {
		  // 判断 obj1 的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回 false
			if (typeof obj1[prop] === 'object') {
				if (!isObjectValueEqual(obj1[prop], obj2[prop])) return false
			} else if (obj1[prop] !== obj2[prop]) {
				return false
			}
		} else {
			return false
		}
	}
	return true
}
let obj1 = {
	a: 1,
	b: {c: 2}
}
let obj2 = {
	b: {c: 3},
	a: 1
}
console.log(isObjectValueEqual(obj1, obj2)) // false