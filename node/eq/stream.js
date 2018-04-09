// const fs = require("fs");

// let data = "";

// let readerStream = fs.createReadStream("input.txt");
// let writeStream = fs.createWriteStream("output.txt");

// readerStream.setEncoding("UTF8");

// readerStream.on("data", chunk => {
//   data += chunk;
//   data += "写入";
//   writeStream.emit("writer");
// });

// readerStream.on("end", () => {
//   console.log(data);
// });

// readerStream.on("error", err => {
//   console.log(err.stack);
// });

// writeStream.on("writer", () => {
//   writeStream.write(data, "UTF8");
//   writeStream.end();
// });
// writeStream.on("finish", function() {
//   console.log("写入完成");
// });

// writeStream.on("error", err => {
//   console.log(err.stack);
// });

// console.log("over");
//管道流操作实例;

// var fs = require("fs");

// // 创建一个可读流
// var readerStream = fs.createReadStream("input.txt");

// // 创建一个可写流
// var writerStream = fs.createWriteStream("output.txt", { flags: "a" });
// // 可能存在覆盖状态,可以设置写入流的追加参数来解决:
// // 管道读写操作
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);

// console.log("程序执行完毕");

// 链式流 compress createGzip

// var fs = require("fs");
// var zlib = require("zlib");

// // 压缩 input.txt 文件为 input.txt.gz
// fs
//   .createReadStream("input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("input.txt.gz"));

// console.log("文件压缩完成。");
//decompress
var fs = require("fs");
var zlib = require("zlib");

// 解压 input.txt.gz 文件为 input.txt createGunzip
fs
  .createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));

console.log("文件解压完成。");
