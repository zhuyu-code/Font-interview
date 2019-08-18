/*
 * @Description: 事件
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 20:22:49
 * @LastEditTime: 2019-08-16 20:27:46
 */
const events = require("events");
const myEmit = new events.EventEmitter();
myEmit.on("add", function () {
  console.log("增加内容")
})
myEmit.on("add", function (k) {
  console.log("有参数内容" + k)
})
myEmit.emit("add", "zhuyu");
myEmit.on("delete", function () {
  setInterval(function () {
    console.log("触发计时器函数")
  }, 1000)
})
myEmit.emit("delete");