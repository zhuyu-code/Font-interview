/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-16 22:32:01
 * @LastEditTime: 2019-09-16 22:53:45
 */
var product='apple';
var obj={
  product:'pen',
  prop:{
    product:'apple pen',
    getProduct:function(){
      return this.product;
    }
  }
}
product='pineapple';
console.log(obj.prop.getProduct());
var buy=obj.prop.getProduct;
console.log(buy())
console.log(global)