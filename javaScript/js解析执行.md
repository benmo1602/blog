### 预解析

JS解析与执行过程存在 预处理

#### 分类

JS的解析和执行分为两个部分

 	1. 全局 (JS 一开始解析与执行的地方)
 	2. 函数（函数调用才开始解析与执行）

### 全局

 1. 预处理阶段 （变量提升）

     	1. 全局中的函数声明
     	2. 全局中的var声明变量

    先处理函数、在处理var 变量

 2. 执行阶段

#### 函数

 1. 预处理阶段

     	1. 函数参数
     	2. 函数中的函数声明
     	3. 函数中的用var声明变量

    先处理函数参数、再到函数、最后处理var变量

 2. 执行阶段

#### 变量提升

##### 全局

​	函数 > var

```js
console.log(getName()); // 5
var getName = function() {
  console.log(4);
}
console.log(getName()); // 4
function getName() {
  console.log(5);
}
console.log(getName()); // 4
```

```js
console.log(a) // undefined
var a = 1;
console.log(a) // 1
var a = 2;
console.log(a) // 2
```

##### 函数内

函数 > 参数 > var

1. 函数内参数名与函数名相同，以函数优先

2. 函数内参数名与var变量，参数优先

   ```js
     function getName(a,b) {
       console.log(a,b) // function , 2
       function a () {}
       var b  = 12;
     }
     console.log(getName(1,2))
   ```
