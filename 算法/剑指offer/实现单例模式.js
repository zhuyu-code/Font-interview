/*
 * @Description: 单例模式的两种解法
 单例模式的应用场景：全局的用户信息对象，登录注册
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-13 20:55:03
 * @LastEditTime: 2019-08-14 13:06:10
 */

//方法一，使用全局变量
var ins = null;

function Singleton(name, age) {
  if (ins) {
    return ins;
  }
  ins = this;
  this.name = name;
  this.age = age;
}
const single1 = new Singleton("zhuyu", 20);
const single2 = new Singleton("zhuyu", 20);
const single3 = new Singleton("zhuming", 20);
console.log(single1 === single2); //true
console.log(single2 === single3); //true
//使用全局变量的缺点也很明显，就是全局变量容易被污染
//方法二，使用静态属性的方式。
function Singleton2(name, age) {
  if (Singleton2.ins) {
    return Singleton2.ins;
  }
  Singleton2.ins = this;
  this.name = name;
  this.age = age;
}
const single4 = new Singleton2("zhuyu", 20);
const single5 = new Singleton2("zhuyu", 20);
const single6 = new Singleton2("zhuming", 20);
console.log(single4 === single5); //true
console.log(single5 === single6); //true