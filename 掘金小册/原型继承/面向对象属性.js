/*
 * @Description: 
 hasOwnProperty()//用于判断属性是否在对象上面,object.hasOwnProperty("属性"),是否是其对象属性
 in//用于判断属性是否在对象和原型上面，"属性" in object
 isPrototypeOf//判断是否由该原型对象实例化来的。原型对象 isPrototypeOf 对象
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 17:29:03
 * @LastEditTime: 2019-08-20 17:34:10
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.weight = 100;
Person.prototype.height = 100;
var p = new Person("zhuyu", 21);
console.log("开始");
console.log(p.hasOwnProperty("name"));
console.log(p.hasOwnProperty("weight"));
console.log("name" in p);
//判断是否只是原型属性
if ("weight" in p) {
  if (!p.hasOwnProperty("weight")) {
    console.log("是他的原型属性")
  }
}

console.log("是否是其原型对象");
console.log(Person.prototype.isPrototypeOf(p));
console.log(p.__proto__.constructor.prototype);