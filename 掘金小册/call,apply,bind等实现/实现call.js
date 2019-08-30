/*
 * @Description: 模拟实现call函数调用
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-20 15:28:23
 * @LastEditTime: 2019-08-30 09:23:28
 */
Function.prototype.myCall = function (context = window, ...args) {
  context = context || window;
  var fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}
class A {
  constructor(name) {
    this.name = name
  }
  create() {
    console.log("创建函数");
    console.log(this)
  }
}
var a = new A("zhuyu");
class B {
  constructor(name) {
    this.name = name
  }
}
var b = new B("zhuming");
a.create.call(b)