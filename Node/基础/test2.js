/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 20:27:52
 * @LastEditTime: 2019-08-16 20:40:38
 */
const fs = require("fs");
const data = fs.readFileSync("./test1.js", "utf-8");
console.log(data);
fs.writeFileSync("./test2.txt", data);
const data2 = fs.readFile("./test1.js", "utf-8", (err, data) => {
  fs.writeFile("./test1.txt", data, (err) => {
    console.log(err);
  })
})
console.log("内容打印")