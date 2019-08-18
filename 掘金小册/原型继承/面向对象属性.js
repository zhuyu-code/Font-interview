/*
 * @Description: 
 hasOwnProperty()//用于判断属性是否在对象上面
 in//用于判断属性是否在对象和原型上面
 isPrototypeOf//判断是否由该原型对象实例化来的。
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 17:29:03
 * @LastEditTime: 2019-08-15 18:50:21
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.weight = 100;
Person.prototype.height = 100;
var p = new Person("zhuyu", 21)
console.log("开始")
console.log(p.hasOwnProperty("name"));
console.log(p.hasOwnProperty("weight"));
console.log("name" in p);