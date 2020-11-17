# [每日一题汇总](https://github.com/lgwebdream/FE-Interview/edit/master/summarry/daily.md)

### Day1:请写出下面代码执行的的结果

```js
console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
```
分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/37)

<br/>

### Day2:写出执行结果

```js
function side(arr) {
  arr[0] = arr[2];
}
function a(a, b, c = 3) {
  c = 10;
  side(arguments);
  return a + b + c;
}
a(1, 1, 1);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/38)

<br/>

### Day3:写出执行结果

```js
var min = Math.min();
max = Math.max();
console.log(min < max);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/39)

<br/>

### Day4:写出执行结果,并解释原因

```js
var a = 1;
(function a () {
    a = 2;
    console.log(a);
})();

```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/40)

<br/>

### Day5:写出执行结果,并解释原因

```js
var a = [0];
if (a) {
  console.log(a == true);
} else {
  console.log(a);
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/41)

<br/>

### Day6:写出执行结果,并解释原因

```js
(function () {
  var a = (b = 5);
})();

console.log(b);
console.log(a);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/42)

<br/>

### Day7:写出执行结果,并解释原因

```js
var fullname = 'a';
var obj = {
   fullname: 'b',
   prop: {
      fullname: 'c',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // c
var test = obj.prop.getFullname;
console.log(test());  // a
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/43)

<br/>

### Day8:写出执行结果,并解释原因

```js
var company = {
    address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address
console.log(yideng.address);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/44)

<br/>

### Day9:写出执行结果,并解释原因

```js
var foo = function bar(){ return 12; };
console.log(typeof bar());
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/45)

<br/>

### Day10:写出执行结果,并解释原因

```js
var x=1;
if(function f(){}){
    x += typeof f;
}
console.log(x)
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/46)

<br/>

### Day11:写出执行结果,并解释原因

```js
function f(){
      return f;
 }
console.log(new f() instanceof f);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/47)

<br/>

### Day12:写出执行结果,并解释原因

```js
var foo = {
        bar: function(){
            return this.baz;
        },
         baz:1
    }
console.log(typeof (f=foo.bar)());
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/48)

<br/>

### Day13:关于AMD、CMD规范区别说法正确的是？（多选）

```js
关于AMD、CMD规范区别说法正确的是？（多选）

A.AMD规范：是 RequireJS在推广过程中对模块定义的规范化产出的
B.CMD规范：是SeaJS 在推广过程中对模块定义的规范化产出的
C.CMD 推崇依赖前置;AMD 推崇依赖就近
D.CMD 是提前执行;AMD 是延迟执行
E.AMD性能好,因为只有用户需要的时候才执行;CMD用户体验好,因为没有延迟,依赖模块提前执行了
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/49)

<br/>

### Day14:关于SPA单页页面的理解正确的是?

```js
关于SPA单页页面的理解正确的是?

A.用户体验好、快，但是内容的改变需要重新加载整个页面，会造成不必要的跳转和重复渲染；
B.前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
C.初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
D.前进后退路由管理需要使用浏览器的前进后退功能
E.SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
```

分类：Vue、React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/50)

<br/>

### Day15:下面对Vue.js中keep-alive的理解正确的是？（多选）

```js
下面对Vue.js中keep-alive的理解正确的是？（多选）

A.一般结合路由和动态组件一起使用，用于缓存组件；
B.提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 include  的优先级比 exclude 高；
C.对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。
D.keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，但是不能避免重新渲染

```

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/51)

<br/>

### Day16:关于Vue.js虚拟DOM的优缺点说法正确的是？（多选）

```js
关于Vue.js虚拟DOM的优缺点说法正确的是？（多选）

A.可以保证性能下限，比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
B.无需手动操作DOM，不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
C.可以进行极致优化： 虚拟 DOM + 合理的优化，可以使性能达到极致
D.可以跨平台，虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。
```

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/52)

<br/>

### Day17:下面代码输出什么？

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/53)

<br/>

### Day18:写出执行结果,并解释原因

```js
const num = {
  a: 10,
  add() {
    return this.a + 2;
  },
  reduce: () => this.a -2;
};
console.log(num.add());
console.log(num.reduce());
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/54)

<br/>

### Day19:写出执行结果,并解释原因

```js
const person = { name: "yideng" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/55)

<br/>

### Day20:写出执行结果,并解释原因

```js
["1", "2", "3"].map(parseInt);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/56)

<br/>

### Day21:写出执行结果,并解释原因

```js
[typeof null, null instanceof Object]
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/57)

<br/>

### Day22:写出执行结果,并解释原因

```js
function f() {}
const a = f.prototype,b = Object.getPrototypeOf(f)
console.log(a === b);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/58)

<br/>

### Day23:写出执行结果,并解释原因

```js
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/59)

<br/>

### Day24:选择正确的答案

```js
console.log([2,1,0].reduce(Math.pow));
console.log([].reduce(Math.pow));

/ *
A. 2 报错
B. 2 NaN
C. 1 报错
D. 1 NaN
*/
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/60)

<br/>

### Day25:请问变量a会被GC吗

```js
function test(){
    var a = 1;
    return function(){
        eval("");
    }
}
test();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/61)

<br/>

### Day26:写出执行结果,并解释原因

```js
const value  = 'Value is' + !!Number(['0']) ? 'yideng' : 'undefined';
console.log(value);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/62)

<br/>

### Day27:写出执行结果,并解释原因

```js
var arr = [0,1];
arr[5] = 5;
newArr = arr.filter(function(x) { return x === undefined;});
console.log(newArr.length);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/63)

<br/>

### Day28:写出执行结果,并解释原因(以最新谷歌浏览器为准)

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
	console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/64)

<br/>

### Day29:下面代码中 a 在什么情况下会打印 1

```js
var a = ?;
if(a == 1 && a== 2 && a== 3){
 	console.log(1);
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/65)

<br/>

### Day30:写出执行结果,并解释原因

```js
const obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/66)

<br/>

### Day31:写出执行结果,并解释原因

```js
let a = {n: 1};
let b = a;
a.x = a = {n: 2};
console.log(a.x)
console.log(b.x)
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/67)

<br/>

### Day32:写出执行结果,并解释原因

```js
var a1={}, b1='123', c1=123;
a1[b1]='b';
a1[c1]='c';
console.log(a1[b1]);
var a2={}, b2=Symbol('123'), c2=Symbol('123');
a2[b2]='b';
a2[c2]='c';
console.log(a2[b2]);
var a3={}, b3={key:'123'}, c3={key:'456'};
a3[b3]='b';
a3[c3]='c';
console.log(a3[b3]);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/68)

<br/>

### Day33:写出执行结果,并解释原因

```js
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/69)

<br/>

### Day34:写出执行结果,并解释原因

```js
function user(obj) {
  obj.name = "京程一灯"
  obj = new Object()
  obj.name = "精英班"
}
let person = new Object();
user(person);
console.log(person.name);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/70)

<br/>

### Day35:写出执行结果,并解释原因

```js
let x, y;
try {
  throw new Error();
} catch (x) {
  x =1;
  y=2;
  console.log(x);
}
console.log(x);
console.log(y);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/71)

<br/>

### Day36:写出执行结果,并解释原因

```js
function fn() {
    getValue = function () { console.log(1); };
    return this;
}
fn.getValue = function () { console.log(2);};
fn.prototype.getValue = function () {console.log(3);};
var getValue = function () {console.log(4);};
function getValue() {console.log(5);}

//请写出以下输出结果：
getValue();
fn().getValue();
getValue();
new fn.getValue();
new fn().getValue();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/72)

<br/>

### Day37:写出执行结果,并解释原因

```js
let length = 10;
function fn() {
	console.log(this.length);
}
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
obj.method(fn,1);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/73)

<br/>

### Day38:写出执行结果,并解释原因

```js
var a=10;
var foo={
  a:20,
  bar:function(){
      var a=30;
      return this.a;
    }
}
console.log(foo.bar());
console.log((foo.bar)());
console.log((foo.bar=foo.bar)());
console.log((foo.bar,foo.bar)());
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/74)

<br/>

### Day39:写出执行结果,并解释原因

```js
function getName(){
  for(let i = 0;i<5;i++){
    setTimeout(function(){
      console.log(i)
    },i*1000);
  }
  return
  {
    name:'京程一灯'
  }
}
console.log(getName());
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/75)

<br/>

### Day40:写出执行结果,并解释原因

```js
const num = parseInt("2*4",10);
console.log(num);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/76)

<br/>

### Day41:选择正确答案，并解释为什么

```js
const company = { name: "京程一灯" };
Object.defineProperty(company, "address", { value: "北京" });
console.log(company);
console.log(Object.keys(company));
/*
A. {name:"京程一灯",address:"北京"},["name","age"]
B. {name:"京程一灯",address:"北京"},["name"]
C. {name:"京程一灯"},["name","age"]
D. {name:"京程一灯"},["name","age"]
*/
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/77)

<br/>

### Day42:写出执行结果,并解释原因

```js
let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = number => number++;
const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);
console.log(num1);
console.log(num2);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/78)

<br/>

### Day43:写出执行结果,并解释原因

```js
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};
multiply();
multiply();
multiply(value);
multiply(value);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/79)

<br/>

### Day44:写出执行结果,并解释原因

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/80)

<br/>

### Day45:写出执行结果,并解释原因

```js
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/81)

<br/>

### Day46:写出执行结果,并解释原因

```js
function addToList(item, list) {
 return list.push(item);
}
const result = addToList("company", ["yideng"]);
console.log(result);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/95)

<br/>

### Day47:写出执行结果,并解释原因

```js
var a = 0;
if(true){
  a = 10;
  console.log(a,window.a);
  function a(){};
  console.log(a,window.a);
  a = 20;
  console.log(a,window.a);
}
console.log(a);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/96)

<br/>

### Day48:能否以某种方式为下面的语句使用展开运算而不导致类型错误

```js
var obj = { x: 1, y: 2, z: 3 };
[...obj]; // TypeError
// 能否以某种方式为上面的语句使用展开运算而不导致类型错误
// 如果可以，写出解决方式
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/97)

<br/>

### Day49:请你完成一个safeGet函数，可以安全的获取无限多层次的数据

```js
// 请你完成一个safeGet函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如
var data = { a: { b: { c: 'yideng' } } }
safeGet(data, 'a.b.c') // => yideng
safeGet(data, 'a.b.c.d') // => undefined
safeGet(data, 'a.b.c.d.e.f.g') // => undefined
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/98)

<br/>

### Day50:写一个isPrime()函数

```js
写一个isPrime()函数，当其为质数时返回true，否则返回false。
提示：质数是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。
```

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/99)

<br/>

### Day52:请实现一个flattenDeep函数，把嵌套的数组扁平化~~

```js
flattenDeep([1, [2, [3, [4]], 5]]); //[1, 2, 3, 4, 5]
// 请实现一个flattenDeep函数，把嵌套的数组扁平化
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/100)

<br/>

### Day53:请实现一个 uniq 函数，实现数组去重~~

```js
uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
// 请实现一个 uniq 函数，实现数组去重
```

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/101)

<br/>

### Day54:new操作符都做了什么，并手动实现一下

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/102)

<br/>

### Day55:实现 (5).add(3).minus(2) 功能

```js
// 实现 (5).add(3).minus(2) 功能
console.log((5).add(3).minus(2)); // 6
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/103)

<br/>

### Day56:介绍下Set、Map、WeakSet和WeakMap的区别

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/104)

<br/>

### Day57:如何在不使用%摸运算符的情况下检查一个数字是否是偶数

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/105)

<br/>

### Day58:Object.seal和Object.freeze方法之间有什么区别

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/106)

<br/>

### Day59:完成plus函数，通过全部的测试用例

```js
'use strict';
function plus(n){

}
module.exports = plus
// 测试用例如下
'use strict';
var assert = require('assert');
var plus = require('../lib/assign-4');
describe('测试用例',function(){
  it('plus(0) === 0',function(){
    assert.equal(0,plus(0).toString())
  })
  it('plus(1)(1)(2)(3)(5) === 12',function(){
    assert.equal(12,plus(1)(1)(2)(3)(5).toString())
  })
  it('plus(1)(4)(2)(3) === 10',function(){
    assert.equal(10,plus(1)(4)(2)(3).toString())
  })
  it('plus(1,1)(2,2)(3)(4) === 13',function(){
   	assert.equal(13,plus(1,1)(2,2)(3)(4).toString())
  })
})
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/107)

<br/>

### Day60:解释下这段代码的意思以及用到的技术点

```js
[].forEach.call($$("*"),function(a){
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/108)

<br/>

### Day61:写出执行结果,并解释原因

```js
var yideng_a = Function.length;
var yideng_b = new Function().length;
console.log(yideng_a === yideng_b);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/109)

<br/>

### Day62:不借助中间变量交换两个变量的值

```js
不借助中间变量交换两个变量的值
比如 let a = 1,b = 2;交换a,b的值
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/110)

<br/>

### Day63:实现一个isNegtiveZero函数，只检查+0和-0，-0则返回true,+0返回false

```js
// 实现一个isNegtiveZero函数，只检查+0和-0，-0则返回true,+0返回false
function isNegtiveZero(num){
  // 代码实现
}
```

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/111)

<br/>

### Day64:补全代码

```js
/*
	说明：该文件名未知，位于当前项目内的dist/scripts文件夹内
	要求：一句话补全代码，获取它的完整位置:http://xx.com/dis/scripts/xx.js
	注：非node环境，node可以使用__dirname
*/
const url = ✍️代码书写处；
export default url;
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/112)

<br/>

### Day65:选择正确的选项

```js
class YiDeng {
  static str = '京程一灯';
	sayStr = ()=>{
    throw new Error('Need to implement');
  }
}
class Student extends YiDeng(){
  constructor(){
    super();
  }
  sayStr(){
    console.log(Student.str);
  }
}
const laoyuan = new Student();
console.log(Student.str);
laoyuan.sayStr();

//A.undefiend， 报错Need to implement
// B. undefiend, 京程一灯
// C. undefined, undefined
// D.京程一灯， 报错Need to implement
// E. 京程一灯，京程一灯
// F.京程一灯，undefined
// G. str is not defined, 京程一灯
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/113)

<br/>

### Day66:一个简单的算法题目

```js
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，这两个整数可能有多种组合，找出其中一组组合即可，并返回他们的数组下标。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/114)

<br/>

### Day67:写出执行结果,并解释原因

```js
3.toString()
3..toString()
3...toString()
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/115)

<br/>

### Day68:写出执行结果,并解释原因

```js
function yideng(){}
const a = {}, b = Object.prototype;
console.log(a.prototype === b);
console.log(Object.getPrototypeOf(a) === b);
console.log(yideng.prototype === Object.getPrototypeOf(yideng));
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/116)

<br/>

### Day69:写出执行结果,并解释原因

```js
const lowerCaseOnly =  /^[a-z]+$/;
console.log(lowerCaseOnly.test('yideng'));
console.log(lowerCaseOnly.test(null));
console.log(lowerCaseOnly.test());
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/117)

<br/>

### Day70:写出执行结果,并解释原因

```js
function captureOne(re, str) {
  var match = re.exec(str);
  return match && match[1];
}
var numRe  = /num=(\d+)/ig,
    wordRe = /yideng=(\w+)/i,
    a1 = captureOne(numRe,  "num=1"),
    a2 = captureOne(wordRe, "yideng=1"),
    a3 = captureOne(numRe,  "NUM=2"),
    a4 = captureOne(wordRe,  "YIDENG=2"),
		a5 = captureOne(numRe,  "Num=3"),
    a6 = captureOne(wordRe,  "YiDeng=3");
console.log(a1 === a2);
console.log(a3 === a4);
console.log(a5 === a6);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/118)

<br/>

### Day71:[手写代码]实现Promise.all方法

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/119)

<br/>

### Day72:有效括号算法题

```js
/*
	给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
  有效字符串需满⾜：
 	 	1. 左括号必须⽤相同类型的右括号闭合。
  	2. 左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
  示例1：
  	输⼊: "()"
  	输出: true
  示例2：
  	输⼊: "()[]{}"
  	输出: true
  示例 3:
  	输⼊: "(]"
  	输出: false
  示例 4:
  	输⼊: "([)]"
  	输出: false
  示例 5:
  	输⼊: "{[]}"
  	输出: true
*/
```

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/120)

<br/>

### Day73:写出执行结果,并解释原因

```js
function yideng(n,o){
    console.log(o); // ？
    return {
        yideng:function(m){
            return yideng(m,n);
        }
    }
}
const a=yideng(0);a.yideng(1);a.yideng(2);a.yideng(3);
const b=yideng(0).yideng(1).yideng(2).yideng(3);
const c = yideng(0).yideng(1);c.yideng(2);c.yideng(3);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/121)

<br/>

### Day74:写出执行结果,并解释原因

```js
var arr1 = "ab".split('');
var arr2 = arr1.reverse();
var arr3 = "abc".split('');
arr2.push(arr3);
console.log(arr1.length);
console.log(arr1.slice(-1));
console.log(arr2.length);
console.log(arr2.slice(-1));
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/122)

<br/>

### Day75:写出执行结果,并解释原因

```js
var F = function(){}
Object.prototype.a = function(){
console.log('yideng')
}
Function.prototype.b = function(){
console.log('xuetang')
}
var f = new F()
F.a();
F.b();
f.a();
f.b();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/123)

<br/>

### Day76:写出执行结果,并解释原因

```js
const a = [1,2,3],
    b = [1,2,3],
    c = [1,2,4],
		d = "2",
		e = "11";
console.log([a == b, a === b, a > c, a < c, d > e]);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/124)

<br/>


### Day77:补充代码，使代码可以正确执行

```js
const str = '1234567890';
function formatNumber(str){
  // your code
}
console.log(formatNumber(str)); //1,234,567,890
// 补充代码，使代码可以正确执行
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/125)

<br/>

### Day78:Script放在底部还会影响dom的解析和渲染吗？Script内部的代码执行会等待css加载完吗？css加载会影响DOMContentLoaded么？

```html
<!ODCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>京程一灯，每日一题</title>
  </head>
  <body>
    <!--
			1.Script放在底部还会影响dom的解析和渲染吗？
			2.Script内部的代码执行会等待css加载完吗？
			3.css加载会影响DOMContentLoaded么？
		-->
    <link href="https://cdn/css/bootstrap.css" ref="stylesheet">
    <h1>京程一灯</h1>
    <script>
    	console.log("DOMContentLoaded");
    </script>
  </body>
</html>
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/126)

<br/>

### Day79:写出下面代码null和0进行比较的代码执行结果，并解释原因

```js
console.log(null == 0);
console.log(null <= 0);
console.log(null < 0);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/127)

<br/>

### Day80:关于数组sort，下面代码的正确打印结果是什么，并解释原因

```js
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/128)

<br/>

### Day81:介绍防抖与节流的原理，并动手实现

```js
// 京程一灯，每日一题
const debounce = (fn,delay) => {
  // 介绍防抖函数原理，并实现
  // your code
}
const throttle = (fn,delay = 500) => {
  // 介绍节流函数原理，并实现
   // your code
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/129)

<br/>


### Day82:关于隐式转换，下面代码的执行结果是什么？并解释原因

```js
let a = [];
let b = "0";
console.log(a == 0);
console.log(a == !a);
console.log(b == 0);
console.log(a == b);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/130)

<br/>

### Day83:请写出如下代码的打印结果

```js
var obj = {};
var x = +obj.yideng?.name ?? '京程一灯';
console.log(x);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/131)

<br/>

### Day84:对于length下面代码的输出结果是什么？并解释原因

```js
 function foo(){
   console.log(length);
 }
function bar(){
  var length = "京程一灯";
  foo();
}
bar();
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/132)

<br/>

### Day85:对于扩展运算符，下面代码的执行结果是什么？并解释原因

```js
let ydObject = { ...null, ...undefined };
console.log(ydObject);
let ydArray = [...null, ...undefined];
console.log(ydArray);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/133)

<br/>

### Day86:写出类数组转换结果，并解释原因

```js
const arrLike = {
  length:4,
  0:0,
  1:1,
  '-1':2,
  3:3,
  4:4,
}
console.log(Array.from(arrLike));
console.log(Array.prototype.slice.call(arrLike));
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/134)

<br/>

### Day87:写出下面代码1，2，3的大小判断结果

```js
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/135)

<br/>

### Day88:以下两段代码会抛出异常吗？解释原因？

```js
let yd = { x: 1, y: 2 };
// 以下两段代码会抛出异常吗？
let ydWithXGetter1 = {
  ...yd,
  get x() {
    throw new Error();
  },
};

let ydWithXGetter2 = {
  ...yd,
  ...{
    get x() {
      throw new Error();
    },
  },
};
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/136)

<br/>

### Day89:请问React调用机制一共对任务设置了几种优先级别？每种优先级都代表的具体含义是什么？在你开发过程中如果遇到影响主UI渲染卡顿的任务，你又是如何利用这些优先级的？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/137)

<br/>

### Day90:Vue父组件可以监听到子组件的生命周期吗？如果能请写出你的实现方法。

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/138)

<br/>


### Day91:Vue 为什么要用 vm.$set() 解决对象新增属性不能响应的问题 ？你能说说如下代码的实现原理么？

```js
Vue.set (object, propertyName, value)
vm.$set (object, propertyName, value)
```

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/139)

<br/>

### Day92:既然 Vue 通过数据劫持可以精准探测数据在具体dom上的变化,为什么还需要虚拟 DOM diff 呢?

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/904)

<br/>

### Day93:Vue组件中写name选项有除了搭配keep-alive还有其他作用么？你能谈谈你对keep-alive了解么？（平时使用和源码实现方面）

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview/issues/905)

<br/>

### Day94:说一下React Hooks在平时开发中需要注意的问题和原因？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/906)

<br />

### Day95:Promise.all中任何一个Promise出现错误的时候都会执行reject，导致其它正常返回的数据也无法使用。你有什么解决办法么？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/907)

<br />

### Day96:请能尽可能多的说出 Vue 组件间通信方式？在组件的通信中EventBus非常经典，你能手写实现下EventBus么？

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/908)

<br />

### Day97:请讲一下react-redux的实现原理?

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/909)

<br />

### Day98:写出下面代码的执行结果，并解释原因

```js
Object.prototype.yideng = "京程一灯";
var a = 123;
a.b = 456;
console.log(a.yideng);
console.log(a.b)
```

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/910)

<br />

### Day99:React中setState后发生了什么？setState为什么默认是异步？setState什么时候是同步？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/912)

<br />

### Day100:哪些方法会触发react重新渲染？重新渲染render会做些什么？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/913)

<br />

### Day101:Vue v-model 是如何实现的，语法糖实际是什么

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/914)

<br />

### Day102:说一下减少 dom 数量的办法？一次性给你大量的 dom 怎么优化？

分类：Html

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/915)

<br />

### Day103:多个 tab 只对应一个内容框，点击每个 tab 都会请求接口并渲染到内容框，怎么确保频繁点击 tab 但能够确保数据正常显示？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/916)

<br />

### Day104:项目中如何进行异常捕获

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/917)

<br />

### Day105:JavaScript 中如何模拟实现方法的重载,动手实现下

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/918)

<br />

### Day106:Webpack 里面的插件是怎么实现的？

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/919)

<br />

### Day107:对虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？

分类：React、Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/920)

<br />

### Day108:Webpack 为什么慢，如何进行优化

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/921)

<br />

### Day109:动画性能如何检测

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/922)

<br />

### Day110:客户端缓存有几种方式？浏览器出现 from disk、from memory 的策略是啥

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/923)

<br />

### Day111:原生 JavaScript 实现图片懒加载的思路

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/924)

<br />

### Day112:数组里面有 10 万个数据，取第一个元素和第 10 万个元素的时间相差多少

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/925)

<br />

### Day113:Import 和 CommonJS 在 webpack 打包过程中有什么不同

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/926)

<br />

### Day114:说一下Webpack 热更新的原理

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/927)

<br />

### Day115:说一下 vue-router 的原理

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/928)

<br />

### Day116:商城的列表页跳转到商品的详情页，详情页数据接口很慢，前端可以怎么优化用户体验？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/929)

<br />

### Day117:React SSR实现过程？原理是什么？有什么注意事项？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/930)

<br />

### Day118:说一下单点登录实现原理

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/931)

<br />

### Day119:怎样判断一个对象是否是数组，如何处理类数组对象

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/932)

<br />

### Day120:说一下 CORS 的简单请求和复杂请求的区别

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/933)

<br />

### Day121:说一下 在 map 中和 for 中调用异步函数的区别

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/934)

<br />

### Day122:说一下 import 的原理，与 require 有什么不同?

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/935)

<br />

### Day123:说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/936)

<br />

### Day124:说一下 Https 加密握手的过程

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/937)

<br />

### Day125:按要求实现代码

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/938)

<br />

### Day126:请描述 CSRF、XSS 的基本概念、攻击原理和防御措施？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/939)

<br />

### Day127:按要求完成 mergePromise 代码

```js
const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
const ajax1 = () =>
  timeout(2000).then(() => {
    console.log("1");
    return 1;
  });
const ajax2 = () =>
  timeout(1000).then(() => {
    console.log("2");
    return 2;
  });
const ajax3 = () =>
  timeout(2000).then(() => {
    console.log("3");
    return 3;
  });
const mergePromise = (ajaxArray) => {
  // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法
};
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为[1,2,3]
});
// 执行结果为：1 2 3 done [1,2,3]
```

公司：阿里

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/940)

<br />


### Day128:说一下 React.Component 和 React.PureComponent 的区别

公司：高德、有赞、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/941)

<br />

### Day129:React 高阶组件 、Render props 和 hooks 有什么区别，为什么要不断迭代

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/942)

<br />

### Day130:什么是深拷贝，和浅拷贝有什么区别，动手实现一个深拷贝

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/943)

<br />

### Day131:介绍下 webpack，并说下 Webpack 的构建流程

公司：头条、挖财

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/944)

<br />

### Day132:说下 tree-shaking 的原理

公司：头条

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/945)

<br />

### Day133:说一下 mobx 和 redux 有什么区别？

公司：洋葱学院

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/947)

<br />


### Day134:Typescript 里有哪些 JavaScript 没有的类型？

公司：滴滴

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/948)

<br />

### Day135:说一下单元测试、E2E测试？它们有什么区别？

公司：头条

分类：工程化

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/949)

<br />

### Day136:BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？

公司：快手、网易、伴鱼

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/950)

<br />

### Day137:说说浏览器渲染流程，分层之后在什么时候合成，什么是重排、重绘，怎样避免

公司：老虎

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/951)

<br />

### Day138:有 1000 个 dom，需要更新其中的 100 个，如何操作才能减少 dom 的操作？

公司：爱范儿

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/952)

<br />

### Day139:Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？为什么？

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/953)

<br />

### Day140:Fiber算法原理，相比之前的stack算法哪些方面做了优化？

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/954)

<br />


### Day141:请描述下 JavaScript 中 Scope、Closure、Prototype 概念，并说明 JavaScript 封装、继承实现原理。

公司：玄武科技

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/955)

<br />

### Day142:请列出目前主流的 JavaScript 模块化实现的技术有哪些？说出它们的区别？

公司：玄武科技

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/956)

<br />

### Day143:说一下 Vue3 与 Vue2 的对比

公司：高德

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/957)

<br />

### Day144:说一下 Vue 单页与多页的区别

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/958)

<br />


### Day145:介绍下 pm2，pm2 依据什么重启服务

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/959)

<br />

### Day146:原生 JavaScript 实现图片懒加载的思路

公司：安居客

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/960)

<br />

Day147:在浏览器执行以下代码，写出打印结果

```js
console.log("start");
setTimeout(() => {
  console.log("children2");
  Promise.resolve().then(() => {
    console.log("children3");
  });
}, 0);
new Promise(function (resolve, reject) {
  console.log("children4");
  setTimeout(function () {
    console.log("children5");
    resolve("children6");
  }, 0);
}).then((res) => {
  console.log("children7");
  setTimeout(() => {
    console.log(res);
  }, 0);
});
```

公司：新东方

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/961)




### Day148:请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求

公司：快手

分类：JavaScript、编程题

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/962)

<br />


### Day149:一个人每次只能走一层楼梯或者两层楼梯，问走到第 80 层楼梯一共有多少种方法

公司：快手

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/963)

<br />

### Day150:说一下对 React context 的理解

公司：脉脉、酷家乐

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/964)

<br />


### Day151:for..of 和 for...in 是否可以直接遍历对象？为什么？如果不可以有什么解决方案？

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/965)

<br />

### Day152:for..in 和 Object.keys 的区别

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/966)

<br />

### Day153:Promise.resolve(obj)，obj 有几种可能

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/967)

<br />

### Day154:给定起止日期，返回中间的所有月份

```js
// 输入两个字符串 2018-08  2018-12
// 输出他们中间的月份 [2018-10, 2018-11]
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/968)

<br />

### Day155:动手实现一个 repeat 方法

```js
function repeat(func, times, wait) {
  // TODO
}
const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc ("hellworld")，会alert4次 helloworld, 每次间隔3秒
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/969)

<br />

### Day156:输入一个数字，找到对应的字母

```js
/*
 如输入1 返回a
 输入26返回z
 输入27返回aa
 输入28返回ab
 输入53返回aaa
*/
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/970)

<br />

### Day157:输入一个数字，找到对应的字母

公司：微软

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/971)

<br />



### Day158:要求⽤不同⽅式对 A 进⾏改造实现 A.name 发⽣变化时⽴即执⾏ A.getName

```js
/*
已知对象A = {name: 'sfd', getName: function(){console.log(this.name)}},
现要求⽤不同⽅式对A进⾏改造实现A.name发⽣变化时⽴即执⾏A.getName
*/
```

公司：新东方

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/972)

<br />


### Day159:如何把真实 dom 转变为虚拟 dom，代码实现一下

公司：高德

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/973)

<br />

### Day160:如何把真实 dom 转变为虚拟 dom，代码实现一下

公司：头条、自如

分类：Css

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/974)

<br />


### Day161:说一下 koa2 和 express 区别

公司：菜鸟网络、海风教育

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/975)

<br />


### Day162:说一下 RN、Weex、Flutter 的优缺点

公司：腾讯应用宝、寺库

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/976)

<br />

### Day163:什么是微服务，微服务跟单体应用的区别是啥，用微服务有啥好处？

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/977)

<br />


### Day164:说一下 koa-body 的原理

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/978)

<br />

### Day165:Node 如何和 MySQL 进行通信

公司：阿里

分类：Node

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/979)

<br />

### Day166:项目中如何处理安全问题

公司：阿里、喜马拉雅

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/980)

<br />

### Day167:修改代码不造成死循环

```js
while(1){
  console.log(Math.random());
}
```

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/981)

<br />

### Day168:写出页面渲染值，并解释为什么？

```js
<template>
  <div>{{a.b}}</div>
</template>

<script>
export default {
  data () {
    return {
      a: {}
    }
  },
  created () {
    this.a.b = 1
  },
  mounted () {
    this.a.b = 2
  }
}
</script>
```

公司：头条

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/982)

<br />


### Day169:怎么给 Vue 定义全局方法

分类：Vue

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/983)

<br />

### Day170:请实现一个 JSON.parse

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/984)

<br />

### Day171:请实现一个 JSON.stringfy

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/987)

<br />

### Day172:用 JavaScript 实现一个标准的排序算法(快排、冒泡、选择排序)，对某个数字数组进行由低到高的排序。

分类：算法

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/988)

<br />

### Day173:说一下 HTTP2.0 多路复⽤有哪些优势？

分类：网络&安全

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/989)

<br />

### Day174:versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数

```js
var versions = ["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"];
// 要求从小到大排序，注意'1.45'比'1.5'大
function sortVersion(versions) {
  // TODO
}
// => ['1.5','1.45.0','3.3.3.3.3.3','6']
```

公司：头条

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/990)

<br />

### Day175:从输入 URL 到页面加载全过程

公司：头条、边锋、菜鸟网络、爱范儿、心娱

分类：JavaScript

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/991)

<br />

### Day176:怎么理解 to B 和 to C 的业务

公司：顺丰

分类：其它

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/993)

<br />

### Day177:说一下对 React Hook 的理解，它的实现原理，和生命周期有哪些区别？

公司：高德

分类：React

[答案&解析](https://github.com/lgwebdream/FE-Interview-Planet/issues/994)

<br />
