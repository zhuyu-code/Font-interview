/*
 * @Description: 
 用于扩展方法里面的内容，并且不修改原来的类，独立成一个抽象类
 应用场景：
 比如jquery输入选择器，输出不同的jquery对象
Vue.component(....),传入不同的参数生成不同的组件。
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-19 08:34:42
 * @LastEditTime: 2019-08-19 08:50:00
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Factory extends Person {
  constructor(name, age) {
    super(name, age)
  }
  create(role) {
    switch (role) {
      case 'superAdmin':
        return new Factory("超级管理员", ["首页", "权限管理"]);
      case 'admin':
        return new Factory("管理员", ["首页"]);
      default:
        return new Error("参数不正确")
    }
  }
}