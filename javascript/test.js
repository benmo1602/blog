/*
 * @Description: description
 * @Author: benmo(cky9302@163.com)
 * @Date: 2021-02-20 11:09:06
 * @LastEditors: benmo(cky9302@163.com)
 * @LastEditTime: 2021-02-20 11:37:46
 */

Number.prototype.add = function(a) {
  let result = this;
  if(typeof a === "number") {
    result += a;
  }
  return result;
}


Number.prototype.reduce = function(a) {
  let result = this;
  if(typeof a === "number") {
    result -= a;
  }
  return result;
}

let  a = new Number(12)

console.log(a.add(2).reduce(1))
