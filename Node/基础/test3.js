/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 20:41:11
 * @LastEditTime: 2019-08-16 20:53:15
 */
var http = require("http");
const server = http.createServer((req, res) => {
  console.log("向服务器发送请求中")
  console.log(req.url);
  res.writeHead(200, {
    "content-type": "text/plain;utf8"
  })
  res.end("这时服务器返回的文本信息", "utf-8");
})
server.listen(8082, 'localhost');
console.log("服务启动于8082")