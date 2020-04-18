/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-16 22:57:36
 * @LastEditTime: 2019-09-16 23:02:17
 */
var x=10;
var obj={
  x:20,
  fn:function(){
    var x=30;
    return this.x
  }
};
console.log(obj.fn());
console.log((obj.fn)());
console.log((obj.fn=obj.fn)());
console.log((obj.fn,obj.fn)());
console.log(obj.fn.apply(window));