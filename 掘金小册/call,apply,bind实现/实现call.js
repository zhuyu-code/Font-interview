/*
 * @Description: 模拟实现call函数调用
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-20 15:28:23
 * @LastEditTime: 2019-08-20 23:55:30
 */
Function.prototype.myCall = function (context = global, ...args) {

  context = context || window;
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

function eat2() {
  console.log("吃多点")
}
class Student {

}
var p = new Person();
var s = new Student();
eat2.myCall();