# 通用的 curry 函数

   `function curry(fn) {
        return function curried() {
            let args = [].slice.call(arguments);
            return args.length >= fn.length ?
                fn.apply(this, args) :
                ()=> {
                    let  rest = [].slice.call(arguments);
                    return curried.apply(this, args.concat(rest));
                };
        };
    }`

### bind

    function add3(a, b, c) { return a+b+c; }
    var add6 = add3.bind(this, 2, 4);
    add6(8);  // 14

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
