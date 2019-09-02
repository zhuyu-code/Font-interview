/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-09-01 20:07:04
 * @LastEditTime: 2019-09-01 20:07:30
 */
// #!/usr/bin/env node

const buff = [];

function flatten(arr) {
  // TODO
}


process.stdin.on('data', (data) => {
  buff.push(data)
});

process.stdin.once('end', () => {
  const input = Buffer.concat(buff).toString('UTF-8');

  const res = flatten(JSON.parse(input));

  console.log(res);
});