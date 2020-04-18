'use strict';
console.log(this)
function obj(){
  console.log(this);
}
const a=new obj();