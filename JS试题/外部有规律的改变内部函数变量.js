/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 16:08:38
 * @LastEditTime: 2019-08-15 16:17:01
 */
function money() {
  var money = 20;

  function set() {
    money++;
    return money
  }

  function get() {
    money--;
    return money;
  }
  return {
    set,
    get
  }
}
var f = money()
console.log(f.set());
console.log(f.set());