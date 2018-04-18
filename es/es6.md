# ECMAscript 18-2 

efault Parameters（默认参数） in ES6

let  link = (height = 50, color = 'red', url = 'http://azat.co') {
  ...
}

Template Literals （模板文本）in ES6

    let name = `Your name is ${first} ${last}. `;
    let url = `http://localhost:3000/api/messages/${id}`;

    Multi-line Strings （多行字符串）in ES6

    let roadPoem = `Then took the other, as just as fair,
        And having perhaps the better claim
        Because it was grassy and wanted wear,
        Though as for that the passing there
        Had worn them really about the same,`;
    let fourAgreements = `You have the right to be you.
        You can only be you when you do your best.`;


Destructuring Assignment （解构赋值）in ES6

    object
    let  { house, mouse} = $('body').data(); // we'll get house and mouse variables
    let  {jsonMiddleware} = require('body-parser');
    let  {username, password} = req.body;


    let  { house, mouse} = $('body').data(); // we'll get house and mouse variables
    let  {jsonMiddleware} = require('body-parser');
    let  {username, password} = req.body;

    // arrey
    let  [col1, col2]  = $('.column'),
   [line1, line2, line3, , line5] = file.split('n');

Enhanced Object Literals （增强的对象文本）in ES6
    下面是一个典型ES5对象文本，里面有一些方法和属性：

    JavaScript

    var serviceBase = {port: 3000, url: 'azat.co'},
        getAccounts = function(){return [1,2,3]};
        var accountServiceES5 = {
        port: serviceBase.port,
        url: serviceBase.url,
        getAccounts: getAccounts,
        toString: function() {
            return JSON.stringify(this.valueOf());
        },
        getUrl: function() {return "http://" + this.url + ':' + this.port},
        valueOf_1_2_3: getAccounts()
    }
 

    如果我们想让它更有意思，我们可以用Object.create从serviceBase继承原型的方法：

    JavaScript

    var accountServiceES5ObjectCreate = Object.create(serviceBase)
    var accountServiceES5ObjectCreate = {
    getAccounts: getAccounts,
    toString: function() {
        return JSON.stringify(this.valueOf());
    },
    getUrl: function() {return "http://" + this.url + ':' + this.port},
    valueOf_1_2_3: getAccounts()
    }
    我们知道，accountServiceES5ObjectCreate 和accountServiceES5 并不是完全一致的，因为一个对象(accountServiceES5)在__proto__对象中将有下面这些属性：



为了方便举例，我们将考虑它们的相似处。所以在ES6的对象文本中，既可以直接分配getAccounts: getAccounts,也可以只需用一个getAccounts，此外，我们在这里通过__proto__（并不是通过’proto’）设置属性，如下所示：

JavaScript
    

    var serviceBase = {port: 3000, url: 'azat.co'},
    getAccounts = function(){return [1,2,3]};
    var accountService = {
        __proto__: serviceBase,
        getAccounts,
        toString() {
            return JSON.stringify((super.valueOf()));
        },
        //另外，我们可以调用super防范，以及使用动态key值(valueOf_1_2_3):
        getUrl() {return "http://" + this.url + ':' + this.port},
        [ 'valueOf_' + getAccounts().join('_') ]: getAccounts()
    };
    console.log(accountService)

Arrow Functions （箭头函数）in ES6
    () => {

    }

Promises in ES6

var wait1000 =  ()=> new Promise((resolve, reject)=> {
        setTimeout(resolve, 1000)});
        wait1000()
    .then(function() {
        console.log('Yay!')
        return wait1000()
    })
    .then(function() {
        console.log('Wheeyee!')
    });
Block-Scoped Constructs Let and Const（块作用域构造Let and Const）
    let b = () => {
        let a = 0
    }
Classes（类） in ES6
    class baseModel {
        constructor(options, data) { // class constructor，node.js 5.6暂时不支持options = {}, data = []这样传参
            this.name = 'Base';
            this.url = 'http://azat.co/api';
            this.data = data;
            this.options = options;
        }
    
        getName() { // class method
            console.log(`Class name: ${this.name}`);
        }
    }

    class AccountModel extends baseModel {
        constructor(options, data) {
            super({private: true}, ['32113123123', '524214691']);
            //call the parent method with super
            this.name = 'Account Model';
            this.url +='/accounts/';
        }
        get accountsData() { //calculated attribute getter
            // ... make XHR
            return this.data;
        }
    }
    let accounts = new AccountModel(5);
    accounts.getName();
    console.log('Data is %s', accounts.accountsData);
Modules（模块） in ES6

    //用ES6 写的module.js文件库：
    export var port = 3000;
    export function getAccounts(url) {
    ...
    }
    
    //需用import {name} from ‘my-module’语法
    import {port, getAccounts} from 'module';
    console.log(port); // 3000

    //在main.js中把整个模块导入, 并命名为 service
    import * as service from 'module';
    console.log(service.port); // 3000

如何使用ES6  (Babel)
    babel。你可以把它作为一个独立的工具使用，也可以把它放在构建中。grunt，gulp和webpack中都有可以支持babel的插件。
    
    npm install --save-dev gulp-babel

    在gulpfile.js中，定义一个任务build，放入src/app.js，并且编译它进入构建文件中。

JavaScript
    var gulp = require('gulp'),
    babel = require('gulp-babel');
    gulp.task('build', function () {
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('build'));
    })


Node.js and ES6
    在nodejs中，你可以用构建工具或者独立的Babel模块 babel-core 来编译你的Node.js文件。安装如下：

    npm install --save-dev babel-core
    
    //在node.js中，你可以调用这个函数
    require("babel-core").transform(ES5Code, options);

ES6总结

1、全新的Math, Number, String, Array 和 Object 方法

2、二进制和八进制数据类型

3、默认参数不定参数扩展运算符

4、Symbols符号

5、tail调用

6、Generators (生成器)

7、New data structures like Map and Set(新的数据构造对像MAP和set)

参考文献：
ES6 Cheatsheet (FREE PDF)
http://webapplog.com/ES6/comment-page-1/
Understanding ECMAScript 6 by Nicolas Zakas book
http://ES6-features.org/#DateTimeFormatting
IIFE：立刻运行的函数表达式
http://web.jobbole.com/86984/