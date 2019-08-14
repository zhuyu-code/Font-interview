/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-14 22:00:04
 * @LastEditTime: 2019-08-14 22:16:35
 */
//最简单的深拷贝使用JSON.parse(JSON.stringify(object))
//局限性 
/*会忽略undefined
会忽略 symbol
不能序列化函数
不能解决循环引用的对象*/