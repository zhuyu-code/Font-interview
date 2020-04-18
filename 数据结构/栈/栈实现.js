/*
 * @Description: 实现Stack
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-18 20:49:39
 * @LastEditTime: 2019-09-14 08:53:10
 */
//栈有5个方法push,pop,peek,getCount,isEmpty
class Stack {
  construcor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.getCount() - 1]
  }
  getCount() {
    return this.stack.length;
  }
  isEmpty() {
    return this.getCount() === 0
  }
}