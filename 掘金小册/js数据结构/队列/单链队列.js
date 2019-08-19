/*
 * @Description: 
 出列平均复杂度为O(n),循环队列平均复杂度为O(1)
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-18 21:24:47
 * @LastEditTime: 2019-08-19 10:29:22
 */
class Queue {
  constructor() {
    this.queue = [];
  }
  //入列
  enQueue(item) {
    this.queue.push(item)
  }
  //出列
  deQueue() {
    return this.queue.shift();
  }
  //队列头部
  getHeader() {
    return this.queue[0]
  }
  //队列长度
  getLength() {
    return this.queue.length
  }
  //判断是否为空
  isEmpty() {
    return this.getLength() === 0
  }
}