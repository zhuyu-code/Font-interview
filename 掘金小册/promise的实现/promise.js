/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-02 13:19:24
 * @LastEditTime: 2019-09-02 14:53:41
 */
class Promise {
  constructor(extentor) {
    if (typeof extentor !== "function") {
      throw new Error("必须是一个函数")
    }
    //初始化数据
    this.initData();

    //定义resolve执行方法
    //必须使用箭头函数，不然就得this绑定，都不就会this传递丢失。
    const resolve = (value) => {
      if (this.state === "pendding") {
        this.state = "fulfill";
        this.value = value;
      }
    }

    //定义reject方法
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
      }
    }

    //传入的参数执行这两个
    extentor(resolve, reject);
  }
  initData() {
    this.state = "pendding";
    this.value = null;
    this.reason = null; //拒绝原因
  }

}
Promise.prototype.then = (onFulfilled, onRejected) => {

  if (typeof onFulfilled !== "function") {
    onFulfilled = function (value) {
      return value;
    }
    if (typeof onRejected !== "function") {
      onRejected = function (reason) {
        throw reason
      }
    }
    if (this.state === "fulfill") {
      onFulfilled(this.value)
    }
    if (this.state === "rejected") {
      onRejected(this.reason)
    }
  }
}
module.exports = Promise;