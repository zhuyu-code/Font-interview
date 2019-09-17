/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-12 20:48:20
 * @LastEditTime: 2019-09-12 21:03:28
 */
function add(num1,num2){
  var reg=/^[1-9]\d*$  /;
if(!reg.test(num1)){
return false;
 }
 if(!reg.test(num2)){
  return false
}
  if(num1.length>=5100){
      return false
  }
  if(num2.length>=5100){
      return false;
  }
  return num1+num2
}
console.log(add(13254,4354325))

function isBanlanced(str) {
  let arr = [...str];
  let stack = [];

  for (let i = 0; i < arr.length; ++i) {
      if (arr[i] == "(") {
          stack.push("(");
      } else if (arr[i] == ")") {
          if (stack.length === 0) {
              return false;
          }
          stack.pop();
      }
  }
}