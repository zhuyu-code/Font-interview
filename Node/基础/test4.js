/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-23 22:38:51
 * @LastEditTime: 2019-08-23 23:06:51
 */
(function () {
  var x = y = 10;
})();
// console.log(x);
console.log(y);
var s1 = "qpzm";
var s2 = "qp" + "zm";

if (s1 == s2) {
  console.log("s1 == s2 return true");
}

function out(x) {
  var temp = 2;
  return function (y) {
    console.log(x + y + (++temp));
  }
}
var inside = out(3);
inside(5);