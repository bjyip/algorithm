// 判断两个对象是否相等
function isObjectValueEqual(obj1, obj2) {
	if (obj1 === obj2) return true
	const type1 = Object.prototype.toString.call(obj1)
	const type2 = Object.prototype.toString.call(obj2)
	if (type1 !== type2) return false
	if (!['[object Object]', '[object Array]'].includes(type1)) {
		return obj1 === obj2
	}
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
	for (let prop in obj1) {
		if (!Object.hasOwnProperty.call(obj2, prop)) return false
		if (typeof obj1[prop] === 'object') {
			return isObjectValueEqual(obj1[prop], obj2[prop])
		} else {
			return obj1[prop] === obj2[prop]
		}
	}
	return true
}

function isObjectValueEqual(obj1, obj2) {
	// 判断两个对象是否指向同一内存，指向同一内存返回 true
	if (obj1 === obj2) return true
	const type1 = Object.prototype.toString.call(obj1)
	const type2 = Object.prototype.toString.call(obj2)
	// 判断两个对象类型是否一致，不一致返回 false
	if (type1 !== type2) return false
	// 数据类型一致时，判断两个参数是否为数组或者对象，都不是则直接返回是否一致
	if (!['[object Object]', '[object Array]'].includes(type1)) {
		return obj1 === obj2
	}
	// 判断两个对象键值数组长度是否一致，不一致返回 false
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  // 遍历对象的键值
	for (let prop in obj1) {
		// 判断 obj1 的键值，在 obj2 中是否存在，不存在，返回 false
		if (!Object.hasOwnProperty.call(obj2, prop)) return false
		// 判断 obj1 的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回 false
		if (typeof obj1[prop] === 'object') {
			return isObjectValueEqual(obj1[prop], obj2[prop])
		} else {
			return obj1[prop] === obj2[prop]
		}
	}
	// 两个空对象/空数组相等，返回true
	return true
}
let obj1 = {
	a: null,
	b: {c: 2}
}
let obj2 = {
	b: {c: 2},
	a: 1
}
console.log(isObjectValueEqual(obj1, obj2)) // false