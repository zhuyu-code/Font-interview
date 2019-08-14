/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 21:46:06
 * @LastEditTime: 2019-08-14 21:48:34
 */
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
//解决方法1
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
//解决方法2
for (let i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function timer() {
      console.log(i)
    }, i * 1000)
  })(i)
}
//解决方法3，定时器第三个参数为传入的timer
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000, i)
}