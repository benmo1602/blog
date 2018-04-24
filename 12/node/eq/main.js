// const fs = require("fs");

// fs.readFile("input.txt", function(err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });
// console.log("程序执行结束!");

// 阻塞和非阻塞，同步和异步是node.js里经常遇到的词汇，我举个简单的例子来说明：

// 我要看足球比赛，但是妈妈叫我烧水，电视机在客厅，烧水要在厨房。家里有2个水壶，一个是普通的水壶，另一个是水开了会叫的那种水壶。我可以：

// 用普通的水壶烧，人在边上看着，水开了再去看球。（同步，阻塞）这个是常规做法，但是我看球不爽了。
// 用普通水壶烧，人去看球，隔几分钟去厨房看看。（同步，非阻塞）这个又大问题，万一在我离开的几分钟水开了，我就麻烦了。
// 用会叫的水壶，人在边上看着。（异步，阻塞）这个没有问题，但是我太傻了。
// 用会叫的水壶，人去看球，听见水壶叫了再去看。（异步，非阻塞）这个应该是最好的。
// 等着看球的我：阻塞

// 看着电视的我：非阻塞

// 普通水壶：同步

// 会叫的水壶：异步

// 所以，异步往往配合非阻塞，才能发挥出威力。

// 引入 events 模块
const events = require("events");
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
  console.log("连接成功。");

  // 触发 data_received 事件
  eventEmitter.emit("data_received");
};

// 绑定 connection 事件处理程序
eventEmitter.on("connection", connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received", function() {
  console.log("数据接收成功。");
});

// 触发 connection 事件
eventEmitter.emit("connection");

console.log("程序执行完毕。");
