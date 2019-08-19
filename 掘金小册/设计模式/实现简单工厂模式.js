/*
 * @Description: 
 通过一种方法传入不同的参数，然后创建不同的实例
 注意静态属性就是类属性，并且静态属性是Fn.name,静态方法在类外面定义是Fn.set=fun(){}，在类里面定义是static set(){}
 如果什么典型的错误需要抛出来的话，那么就使用throw new Error("错误内容"),可以自己捕捉，编译器也会自动捕捉重要错误。
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-19 08:19:55
 * @LastEditTime: 2019-08-19 08:44:32
 */
class Person {
  constructor(name, viewPage) {
    this.name = name;
    this.viewPage = viewPage;
  }


}
Person.setPerson = function (role) {

  switch (role) {
    case 'superAdmin':
      return new Person("超级管理员", ['首页', '通讯录', '发现页', '应用数据', '权限管理']);
    case 'admin':
      return new Person("管理员", ['首页', '通讯录']);
    default:
      throw new Error("参数错误")
  }

}
console.log(Person.setPerson('admin', ["1", "2", "3", "4"]))
/*这个方法的缺陷是要扩展内容的时候，我们需要在原来的类上面做很大修改*/