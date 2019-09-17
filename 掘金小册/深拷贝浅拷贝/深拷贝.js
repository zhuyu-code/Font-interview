/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 22:00:04
 * @LastEditTime: 2019-09-02 08:57:19
 */
//最简单的深拷贝使用JSON.parse(JSON.stringify(object))
//局限性 
/*会忽略undefined
会忽略 symbol
不能序列化函数
不能解决循环引用的对象*/
var o = {
  name: "zhuyu",
  age: 21,
  ts: {
    weight: 50,
    height: 180,
    arr: [15, 4, 5, 6]
  }
}
var b = {

}

function isObject(obj) {
  return obj instanceof Object;
}

function deepCopy(fa, fb) {
  for (let key in fb) {
    if (!isObject(fb[key])) {
      fa[key] = fb[key]
    } else {
      tempConstruc = new fb[key].constructor;
      deepCopy(tempConstruc, fb[key]);
      fa[key] = tempConstruc;
    }
  }
}

deepCopy(b, o);
var a = {
  name: "zhuyu",
  age: [1, 2, 3],
  c: function () {
    console.log("zhuyu")
  },
  d: Symbol(2)
}
var b = {};
deepCopy(b, a);
console.log(b)