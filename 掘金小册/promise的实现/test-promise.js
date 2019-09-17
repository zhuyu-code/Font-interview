/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-02 13:19:33
 * @LastEditTime: 2019-09-02 14:53:57
 */
const myPromise = require("./promise.js");
new myPromise((resolve, reject) => {
  resolve(1)
}).then(value => {
  console.log("value" + value)
}, reason => {
  console.log(reason)
});
console.log("----------------------------------");
// new Promise((resolve, reject) => {
//   resolve(2)
// }).then().then(value => {
//   console.log("value" + value)
// })