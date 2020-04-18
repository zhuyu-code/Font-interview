/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-29 23:18:10
 * @LastEditTime: 2019-08-29 23:18:13
 */
var sleep = function (time, i) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(i);
    }, time);
  })
};


var start = async function () {
  for (let i = 0; i < 6; i++) {
    let result = await sleep(1000, i);
    console.log(result);
  }
};

start();