/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-06 11:04:24
 * @LastEditTime: 2019-08-09 11:38:07
 */
console.log('1');

setTimeout(function () {
  console.log('2');
  process.nextTick(function () {
    console.log('3');
  })
  new Promise(function (resolve) {
    console.log('4');
    resolve();
  }).then(function () {
    console.log('5')
  })
})
process.nextTick(function () {
  console.log('6');
})
new Promise(function (resolve) {
  console.log('7');
  resolve();
}).then(function () {
  console.log('8')
})

setTimeout(function () {
  console.log('9');
  process.nextTick(function () {
    console.log('10');
  })
  new Promise(function (resolve) {
    console.log('11');
    resolve();
  }).then(function () {
    console.log('12')
  })
})
//在node的执行结果是
//1 7 6 8 2 4 9 11 3 10 5 12
console.log(process.memoryUsage());