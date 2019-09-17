/*
 * @Description: 
 1.设定三个状态：分别是PEND,FULF,REJE,并且只能改变一次
 2.myPromise只能接收1个参数，extentor,只有两个方法resolve,reject
 3.改变状态的时候，resolve和reject能传递一个状态
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-02 09:03:05
 * @LastEditTime: 2019-09-02 09:57:45
 */

const PEND = 'pending';

const FULF = 'fulfilled'

const REJE = "rejected"

function myPromise(extentor) {
  this.state = PEND;
  this.value = null;
  this.reason = null

  const resolve = (value) => {
    if (this.state == PEND) {
      this.state = FULF;
      this.value = value
    }
  }
  const reject = (reson) => {
    if (this.state == PEND) {
      this.state = REJE;
      this.reason = reason;
    }
  }

  try {
    extentor(resolve, reject);
  } catch (reason) {
    reject(reason)
  }
}
var promise = new myPromise((resolve, reject) => {
  resolve(2)
})
console.log()
// 13857022822
new Promise(Object)