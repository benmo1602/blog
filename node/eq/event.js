//event.js 文件
// const EventEmitter = require("events").EventEmitter;

// const event = new EventEmitter();

// event.on("some_event", (arg1, arg2) => {
//   console.log("some_event 事件触发", arg1, arg2);
// });

// event.on("some_event", (arg1, arg2) => {
//   console.log("some_event 事件触发", arg1, arg2);
// });
// setTimeout(function() {
//   event.emit("some_event", 1, 2);
// }, 1000);

var events = require("events");
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
  console.log("监听器 listener1 执行。");
};

// 监听器 #2
var listener2 = function listener2() {
  console.log("监听器 listener2 执行。");
};

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener("connection", listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on("connection", listener2);

var eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " 个监听器监听连接事件。");
// 处理 connection 事件
eventEmitter.emit("connection");

// 移除监绑定的 listener1 函数
eventEmitter.removeListener("connection", listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit("connection");
emitter.emit("error");

eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");
