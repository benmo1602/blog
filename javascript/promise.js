/*
 * @Description: description
 * @Author: benmo(cky9302@163.com)
 * @Date: 2021-03-03 09:38:11
 * @LastEditors: benmo(cky9302@163.com)
 * @LastEditTime: 2021-03-03 09:47:13
 *
 */
console.log(1);
setTimeout(function() {
  console.log(2);
}, 0);

const interId = setInterval(function() {
  console.log(3);
}, 0);

setTimeout(() => {
  console.log(10);
  new Promise(function() {
    console.log(11);
    resolve()
  })
  .then(() => {
    console.log(12);
  })
  .then(() => {
    console.log(13);
    clearInterval(interId);
  })
}, 0);

Promise.resolve()
  .then(() => {
    console.log(7);
  })
  .then(() => {
    console.log(8);
  })
  console.log(9);
