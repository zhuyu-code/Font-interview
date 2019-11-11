/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-07-31 17:09:53
 * @LastEditTime: 2019-08-20 09:41:48
 */
//定义一个数组通用的函数
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
//判断是否是数组
function checkArray(arr) {
  if (Array.isArray(arr))
    return false;
}