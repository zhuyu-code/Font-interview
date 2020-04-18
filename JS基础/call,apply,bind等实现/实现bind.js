/*
 * @Description: 实现bind
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-22 10:54:03
 * @LastEditTime: 2019-08-22 10:54:14
 */
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}