/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-14 08:22:57
 * @LastEditTime: 2019-09-14 08:48:52
 */
var isValid=function(str){
  let stack=[];
  obj={
    '(':1,
    ')':-1,
    '{':2,
    '{':-2,
    '[':3,
    ']':-3
  };
  for(let i=0;i<str.length;i++){
    if(obj[str[i]]>0){
      stack.push(str[i])
    }else{
      let popLast=stack.pop();
      if(popLast+obj[str[i]]!==0){
        return false;
      }
    }
   
  }
  if(stack.length!==0){
    return false;
  }
  return true;
}