
### 1. var、let、const

    var 在当前作用域会**变量提升** 
    let和const都能够声明块级作用域，用法和var是类似的

        let , const 的特点是不会变量提升，而是被锁在当前块中。
        const 一旦生命不可修改; 
        不允许修改默认赋值，但如果定义的是对象Object，那么可以修改对象内部的属性值包括新增删除键值对也是可以的

    没有声明和声明后没有赋值是不一样的

    临时死区(TDZ) -- 没什么用
    
    a. 在全局作用域使用let或者const声明，当声明的变量本身就是全局属性，比如closed。只会覆盖该全局变量，而不会替换它。
    b. 选择使用var、let还是const，取决于我们的变量是不是需要更新，通常我们希望变量保证不被恶意修改，而使用大量的const，在react中，props传递的对象是不可更改的，所以使用const声明，声明一个对象的时候，也推荐使用const，当你需要修改声明的变量值时，使用let，var能用的场景都可以使用let替代

## 字符串 

    字符串（String）是JavaScript6大原始数据类型。其他几个分别是Boolean、Null、Undefined、Number、Symbol（es6新增）。

    a. 当Unicode引入扩展字符集之后，16位的字符已经不足以满足字符串的发展，所以才在ES6中更新了Unicode的支持。
        **UTF-16码位：** ES6强制使用UTF-16字符串编码

    b. codePointAt()： 该方法支持UTF-16，接受编码单元的位置而非字符串位置作为参数，返回与字符串中给定位置对应的码位，即一个整数值。

    c. **String.fromCodePoiont()：** 作用与codePointAt相反，检索字符串中某个字符的码位，也可以根据指定的码位生成一个字符。

    d. normalize()：提供Unicode的标准形式，接受一个可选的字符串参数，指明应用某种Unicode标准形式

    新增方法 : 
        1. includes(str, index)： 如果在字符串中检测到指定文本，返回true，否则false。  indexOf()匹配字符串的位置
        2. startsWith(str, index)：如果在字符串起始部分检测到指定文本，返回true，否则返回false。
        3. endsWith(str, index)：如果在字符串的结束部分检测到指定文本，返回true，否则返回false。
        4. repeat(number) 接收一个Number类型的数据，返回一个重复N次的新字符串。即使这个字符串是空字符，也你能返回N个空字符的新字符串

### 正则表达式的其他更新

    正则表达式y修饰符、正则表达式的复制、flags属性…


### 模板字面量

        反撇号``
        function tag(literals, ...substitutions) {
            //literals是数组，第一个位置是""，第二个位置是占位符之间的字符串，在本例中是haha
            //substitutions是字符串中的模板字面量，可能多个
            
            //函数最终返回字符串
        }
        let a = 4
        let t = tag`${a} haha`
        console.log(t) //4 haha