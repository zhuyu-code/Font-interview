/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-17 10:56:26
 * @LastEditTime: 2019-08-17 10:56:31
 */
const express = require('express');
const mysql = require('mysql');

const app = express();

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
});

// Connect
db.connect(err => {
  if (err) throw err;
  console.log('MySql connected....');
});

// 创建数据库
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});

// 创建表
app.get('/createpoststable', (req, res) => {
  let sql =
    'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('posts表已经建立...');
  });
});

// 插入内容
app.get('/addpost1', (req, res) => {
  let post = {
    title: 'post one',
    body: 'this is post one'
  };
  let sql = 'INSERT INTO posts SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post 1 added....');
  });
});

// 插入内容
app.get('/addpost2', (req, res) => {
  let post = {
    title: 'post two',
    body: 'this is post two'
  };
  let sql = 'INSERT INTO posts SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post 2 added....');
  });
});

// 查询内容
app.get('/getposts', (req, res) => {
  let sql = 'SELECT * FROM posts';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// 查询单条内容
app.get('/getpost/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// 更新内容
app.get('/updatepost/:id', (req, res) => {
  let newTitle = 'update title';
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${
    req.params.id
  }`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json('更新成功...');
  });
});

// 删除内容
app.get('/deletepost/:id', (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json('删除成功....');
  });
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
});