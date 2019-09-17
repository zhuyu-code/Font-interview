/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-01 20:07:04
 * @LastEditTime: 2019-09-16 20:09:42
 */
function ChatSmall(arr,k){
  var sortSmall=arr.sort((a,b)=>{
  return a-b;
})
var len=arr.length;
var A=sortSmall[len-1]*1-k;
var B=Number(sortSmall[0])+k;
  return A-B
}
console.log(ChatSmall2([1,3,6],3))
function ChatSmall2(arr,k){
  var max=arr.reduce((max,item)=>{
      return Math.max(max,item)
  })
  var min=arr.reduce((min,item)=>{
      return Math.min((min,item))
  })
  if((max-min)<2*k){
      return 0
  }
      if((max-min)>2*k){
         var re= max-min;
          if(((min+k)-(max-k))>re){
              return re
          }else{
              return ((min+k)-(max-k))
          }
      }
  }