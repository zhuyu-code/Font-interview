/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-29 23:08:47
 * @LastEditTime: 2019-08-29 23:16:47
 */
function myInstanceof(target, origin) {
  var proto = target.__proto__;
  if (proto) {
    if (proto == origin.prototype) {
      return true
    } else {
      return myInstanceof(proto, origin)
    }
  } else {
    return false;
  }
}
var arr = new Array();
console.log(myInstanceof(arr, Object))