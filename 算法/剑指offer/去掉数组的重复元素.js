/*
 * @Description: 编写一个方法，去掉数组中重复的数字
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-15 11:21:09
 * @LastEditTime: 2019-08-15 11:35:18
 */
//方法1，使用set
function repeat(arr) {
  const set = new Set(arr);
  return Array.from(set)
}
console.log(repeat([1, 5, 8, 7, 9, 5]));
//利用hashmap的键值不重复特性
function repeat2(arr) {
  var obj = {};
  var arrk = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    obj[arr[i]] = i
  }
  for (let i in obj) {
    arrk.push(parseInt(i));
  }
  return arrk;
}
console.log(repeat2([1, 5, 8, 7, 9, 5]));

//方法3
function repeat3(arr) {
  var arrk = [];
  arr.forEach(item => {
    if (arrk.indexOf(item) == -1) {
      arrk.push(item);
    }
  })
  return arrk;
}
console.log(repeat3([1, 5, 8, 7, 9, 5]));

//方法4