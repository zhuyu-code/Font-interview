/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-19 19:18:56
 * @LastEditTime: 2019-08-24 20:48:01
 */

// var reg = /(a-z)\1{1,}/g; //正则表达式
// var str = "AAAabbcccdeeeefgaa"; //要演示的目标字符串

// var res1 = str.match(reg) //匹配两个或两个以上连续字符
// var res2 = str.replace(reg, "$1") //其中一种应用，实现字符串去重

// console.log("匹配结果:", res1)
// console.log("字符串去重结果:", res2)
console.log([1, 5, 5, 9, 5].sort((a, b) => {
  return a - b
}))