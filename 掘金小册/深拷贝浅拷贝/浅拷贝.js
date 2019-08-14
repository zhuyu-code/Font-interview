/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 21:52:15
 * @LastEditTime: 2019-08-14 21:59:49
 */
//方法1，使用Object.assign({},.)
var a = {
  name: "zhuyu",
  age: 20
}
//单独使用Object.assgin(a),就是赋值
var k = Object.assign(a)
//使用Object.assgin({},a);就是拷贝，改变第一层就可以了。
var b = Object.assign({}, a);
a.name = "zhuming"
console.log(b)
//方法2，使用展开运算符进行浅拷贝
let c = {
  name: "1",
  age: "1"
}
console.log({
  ...c
})
//方法3，假如是数组使用slice实现浅拷贝
let d = [1, 4, 5, 2, 4, 6];
console.log(d.slice())