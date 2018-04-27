    
### Partial Application


    函数式编程使用函数作为重复使用的声明表达式，避免对状态进行修改，消除了副作用，并使用合成来构建函数。

###  高阶函数 

    first-class  以函数为参数或者返回值 的函数都称为 "高阶函数"

### 装饰器 

    创将函数 来增加其他函数的放方法 和行为 

### 合成 

    我们还可以创建有多个函数合成的函数,创建链式的输入处理。

#### 过滤数据 filter

    function filter (list , fn ) {
        return list.filter(fn);
    }
    // 函数使用 predicate 断言函数(fn) 来过滤一个数组(list)
    
#### predicate 断言函数

    // 简单的使用 '>=' 比较
    function greaterThanOrEqual(a, b) {  
        return a >= b;
    }

    // 用于访问对象属性的函数
    function get(obj, prop) { return obj[prop]; }  
    // `get()` 的柯里化版本
    var getWith = rightCurry(get); 

### 小结

    // 函数式编程中的关键技术，如 Currying(柯里化) 和 Partial Application(偏函数应用) 以及可以使用它们的上下文
    //专注于构建小而有用的行数，与函数式技术相结合，可以合成高阶函数，并实现更好的重用
