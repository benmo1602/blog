Array.prototype.reduce()

    [1,2,3,4].reduce(function(sum, n) {
        return sum += n;
    }, 0);
    // 10

Array.prototype.slice.call(arguments)

    //可用的 arguments 变量来访问传递给函数的所有参数
    function showArgs() {
        var args = [].slice.call(arguments);
    }
