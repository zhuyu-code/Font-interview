/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-19 19:18:56
 * @LastEditTime: 2019-08-20 09:20:48
 */
Function.prototype.myCall = function (context = global, ...args) {

  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}
class Person {
  eat() {
    console.log("吃饭")
  }
}
class Student {

}
var p = new Person();
var s = new Student();
p.myCall(s)