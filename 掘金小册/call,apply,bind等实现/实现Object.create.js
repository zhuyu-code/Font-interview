/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-27 08:18:49
 * @LastEditTime: 2019-08-27 08:20:01
 */
function create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}