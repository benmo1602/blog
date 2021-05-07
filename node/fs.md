<!--
 * @Description: description
 * @Author: caoky(caoky@dchealth.com)
 * @Date: 2021-05-07 10:19:54
 * @LastEditors: caoky(caoky@dchealth.com)
 * @LastEditTime: 2021-05-07 10:20:07
-->
```
/*
 1. fs.stat  检测是文件还是目录(目录 文件是否存在)
 2. fs.mkdir  创建目录 （创建之前先判断是否存在）
 3. fs.writeFile  写入文件(文件不存在就创建,但不能创建目录)
 4. fs.appendFile 写入追加文件
 5.fs.readFile 读取文件
 6.fs.readdir 读取目录
 7.fs.rename 重命名
 8. fs.rmdir  删除目录
 9. fs.unlink 删除文件
*/

var fs=require('fs');   //fs是node.js的核心模块，不用下载安装，可以直接引入

//1. fs.stat  检测是文件还是目录  fs.statSync()同步获取stats对象,通过返回值接收。
fs.stat('html',function(error,stats){
    if(error){
        console.log(error);
        return false;
    }
    console.log('文件：'+stats.isFile());
    console.log('目录：'+stats.isDirectory());
})


//2. fs.mkdir  创建目录
fs.mkdir('css',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('创建目录成功');
})


//3. fs.writeFile  写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略
fs.writeFile('123.txt','你好nodejs 覆盖','utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})


//4. fs.appendFile 追加文件
fs.appendFile('123.txt','这是写入的内容\n',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})


//5.fs.readFile 读取文件
fs.readFile('123.txt',function(error,data){
    if(error){
        console.log(error);
        return false;
    }
    //console.log(data);  //data是读取的十六进制的数据。  也可以在参数中加入编码格式"utf8"来解决十六进制的问题;
    console.log(data.toString());  //读取出所有行的信息
})


//6.fs.readdir 读取目录下第一级内容  把目录下面的文件和文件夹都获取到。
fs.readdir('html',function(error,data){
    if(error){
        console.log(error);
        return false;
    }
    console.log(data);  //data是数组类型，包含文件夹以及文件的名字(只有第一级目录内容)。拿到一个文件夹下面的所有目录
})


//7.fs.rename 重命名  1.改名  2.剪切文件(移动)
fs.rename('html/index.html','html/news.html',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('修改名字成功');
})


//8. fs.rmdir  删除目录   rmdir 这个方法只能删除目录，不能删除文件
fs.rmdir('abc目录',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('删除目录成功');
})


//9. fs.unlink删除文件
fs.unlink('index.txt',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('删除文件成功');
})


//10. fs.createReadStream  从文件流中读取数据，读取的文件比较大时建议用流的方式读取，文件比较大会多次读取。
var fileReadStream = fs.createReadStream( 'data1.json');
var str = '';
fileReadStream.on('data', (data) => {
    console.log("接收到" + data.length);   //文件比较大时，会多次读取，多次执行该回调函数
str += data;
})
fileReadStream.on('end', () => {
    console.log(" --- 结束 ---");
console.log( str );
})
fileReadStream.on('error', (error) => {
    console.log(error)
})


//11. fs.createWriteStream  写入文件流
var fs = require("fs");
var data  = "我是从数据库获取的数据，我要保存起来";
var writerStream = fs.createWriteStream('output.txt');
writerStream.write( data , 'UTF8' );
writerStream.end();  //标记文件末尾  结束写入流，释放资源
writerStream.on( 'finish',  function() {
    console.log("写入完成。");
});
writerStream.on( 'error',  function(error){
    console.log(error.stack);
});
console.log("程序执行完毕");


//12. pipe 管道流
var fs = require("fs");
var readerStream = fs.createReadStream( 'input.txt');
var writerStream = fs.createWriteStream( 'output.txt');
readerStream.pipe( writerStream );
console.log("程序执行完毕");


//13. fs.access 判断目录、文件是否存在(读写权限)
var  fs = require('fs');
fs.access('package.json',(err)=>{
    console.log(err ?  '目录/文件不存在': '文件存在,可以进行读写');
});

```
