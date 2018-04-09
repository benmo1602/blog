const fs = require("fs");
const child_process = require("child_process");

for (let i = 0; i < 3; i++) {
  var workerProcess = child_process.exec(
    "node process/support.js " + i,
    function(error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log("Error code: " + error.code);
        console.log("Signal received: " + error.signal);
      }
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
    }
  );

  workerProcess.on("exit", function(code) {
    console.log("子进程已退出，退出码 " + code + ";" + 1);
  });
}

// child_process.spawn 使用指定的命令行参数创建新进程
// spawn() 方法返回流 (stdout & stderr)，在进程返回大量数据时使用。进程一旦开始执行时 spawn() 就开始接收响应。
for (let a = 4; a < 6; a++) {
  var workerProcess = child_process.spawn("node", ["process/support.js", a]);

  workerProcess.stdout.on("data", function(data) {
    console.log("stdout: " + data);
  });

  workerProcess.stderr.on("data", function(data) {
    console.log("stderr: " + data);
  });

  workerProcess.on("close", function(code) {
    console.log("子进程已退出，退出码 " + code + ";" + 2);
  });
}

// child_process.fork 是 spawn() 方法的特殊形式，用于创建进程

for (var i = 6; i < 9; i++) {
  var worker_process = child_process.fork("process/support.js", [i]);

  worker_process.on("close", function(code) {
    console.log("子进程已退出，退出码 " + code + ";" + 3);
  });
}
