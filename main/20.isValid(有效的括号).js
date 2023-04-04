// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length % 2 === 1) {
		return false
	}
	var hash = {
		'(': ')',
		'[': ']',
		'{': '}'
	}
	var stack = []
	for (let i = 0; i < s.length; i++) {
		if (hash[s[i]]) {
			// 如果是左边括号直接push进stack
			stack.push(s[i])
		} else if (s[i] === hash[stack[stack.length - 1]]) {
			// 如果是右边括号，跟stack的最后一个能匹配，能则pop掉stack最后一个
			stack.pop()
		} else {
			// 如果是右边括号，跟stack的最后一个不能匹配，直接return false
			return false
		}
	}
	return stack.length === 0
}
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 nn 是字符串 s 的长度。
 * 空间复杂度：O(n + ∣Σ∣)，其中 Σ 表示字符集，本题中字符串只包含 6 种括号，∣Σ∣= 6。栈中的字符数量为 O(n)，而哈希映射使用的空间为 O(∣Σ∣)，相加即可得到总空间复杂度。
 */
console.log(isValid("()"))