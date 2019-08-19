/*
 * @Description: 
 为最后输出结果做装饰
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-19 10:07:04
 * @LastEditTime: 2019-08-19 10:11:27
 */
class Circle {
  draw() {
    console.log("画一个圆形")
  }
}
//画一个圆形不够，还要画一个边框
class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.setBorder();
  }
  setBorder() {
    console.log("画一个边框")
  }
}