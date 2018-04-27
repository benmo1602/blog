##  Currying(柯里化) vs Partial Application(偏函数应用)

   首先,  对 高阶函数，闭包 和 call & apply 有一定了解
::: tip
Arity（参数数量） 指的是一个函数可以接受的参数的数量。这可能是一个没有，一个(unary)，两个(二进制)或更多(多值)。您还可以使用具有可变数量参数的函数(variadic(可变参数)函数)。
:::
  
    函数允许您通过函数的 .length 属性来访问它们的参数数量。函数的 .length 属性永远不会改变 – 该属性总是匹配函数的声明参数的数量

    function howMany(a,b,c) {  
        console.log(howmany.length);
    }
    howMany(1,2);      // 3  
    howMany(1,2,3,4);  // 3  


    可用的 arguments 变量来访问传递给函数的所有参数
    function showArgs() {  
        var args = [].slice.call(arguments);
    }

    // [].slice.call(arguments)  == Array.prototype.slice.call(arguments)

    function howMany(...args) {  
        console.log("args:", args, ", length:", args.length);
    }
    howMany(1,2,3,4);  // args: [1,2,3,4], length: 4   (a "real" array)! 


通用的 curry 函数 

    function curry(fn) {  
        return function curried() {                           
            let args = [].slice.call(arguments);
            return args.length >= fn.length ?
                fn.apply(this, args) :
                ()=> {
                    let  rest = [].slice.call(arguments);
                    return curried.apply(this, args.concat(rest));
                };
        };
    }


Partial Application(偏函数应用) 是指使用一个函数并将其应用一个或多个参数，但不是全部参数，在这个过程中创建一个新函数。


###  bind 

    function add3(a, b, c) { return a+b+c; }  
    add3(2,4,8);  // 14
    
    var add6 = add3.bind(this, 2, 4);  
    add6(8);  // 14      
### curry 

    var add6 = curry(add3)(2)(4);  
    add6(8); // 14  

### apply 

    // 应用左边任意数量的参数
    function apply(fn /* partial arguments... */) {  
        var args = [].slice.call(arguments, 1);
        return function() {
            var _args = [].slice.call(arguments);
            return fn.apply(this, args.concat(_args));
        }
    }
    var add6 = apply(add3, 2, 4)

## ES6 中 curry 和 apply 的实现

    function curry(fn) {  
        return function curried(...args) {
            return args.length >= fn.length ?
                fn.call(this, ...args) :
                (...rest) => {
                    return curried.call(this, ...args, ...rest);
                };
        };
    }

    // 应用左边任意数量的参数
    function apply(fn, ...args) {  
        return (..._args) => {
            return fn(...args, ..._args);
        };
    }

