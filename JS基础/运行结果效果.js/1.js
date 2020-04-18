/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-16 22:29:47
 * @LastEditTime: 2019-09-16 22:30:41
 */
function test(a,b){
  return a+b+arguments[2];
}
var result=test('a','b','c','d');
console.log(result);