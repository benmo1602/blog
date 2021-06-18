// bind  永久绑定this 不会 立即执行 ， 参数和 apply 一样
// call 参数是数组 形式 立即执行 一次性
// apply 参数 ，隔开 ， 立即执行 一次性

Function.prototype.bind1 = function() {
    let context = arguments[0];
    const arg = Array.prototype.slice.call(arguments, [1]);
    return () => {
      return this.apply(context, arg);
    }
}

function fn1(a, b, c){
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}
const fn2 = fn1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res)
