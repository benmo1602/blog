//Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

// 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

// 建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

var fs = require("fs");
// console.log(fs);
// 异步读取
fs.readFile("input.txt", function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync("input.txt");
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

// open 打开文件

// stat 获取文件信息
// writeFile
// fs.writeFile(file, data[, options], callback)

//fs.close(fd, callback)

//fs.ftruncate(fd, len, callback)

//异步模式下截取文件的语法格式

// fs.unlink(path, callback)
// 删除文件

// fs.mkdir(path[, mode], callback)

// 创建目录

// fs.readdir(path, callback)

// 读取目录 readdir

// rmdir 删除目录
