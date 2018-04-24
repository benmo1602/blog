//util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。

//util.inherits  实现对象间原型继承 的函数。

// var util = require("util");

// function Base(params) {
//   this.name = "base";
//   this.base = 1991;
//   this.sayname = function() {
//     console.log(this.name);
//   };
// }

// Base.prototype.showname = function() {
//   console.log(this.name);
// };

// function sub() {
//   this.name = "sub";
// }
// util.inherits(sub, Base);

// var objBase = new Base();

// objBase.showname();
// objBase.sayname();
// console.log(objBase);
// var objSub = new sub();
// console.log(objSub);
// objSub.showname();
// objSub.sayname();

// util.inspect

var util = require("util");

function Person() {
  this.name = "benmo";
  this.toString = function() {
    return this.name;
  };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

// isArray
// isRegExp
// isDate
// isError
