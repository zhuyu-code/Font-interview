/*
 * @Description: 如果上帝让你只学一种设计模式，那一定是观察者模式
 浏览器事件机制addeventListener,mobx，
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-19 09:03:23
 * @LastEditTime: 2019-09-09 09:04:17
 */
// 定义主题， 也就是被观察者，发布
/*
  被观察者更改数据触发观察者行为
*/
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notify();
  }
  notify() {
    this.observers.forEach(observe => {
      observe.update();
    })
  }
  attach(item) {
    this.observers.push(item);
  }
}

//定义观察者，订阅
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name}+${this.subject.getState()}`)
  }
}
var s = new Subject();
var o1 = new Observer("zhuyu", s)
var o2 = new Observer("zhuyu2", s)
var o3 = new Observer("zhuyu3", s);
s.setState("状态1")