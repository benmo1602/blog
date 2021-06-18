var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i])
    }
  }
  return result;
}
// console.log(flatten(arr));

// es6 拓展运算符
function flatten2(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
    // concat 可以拼接多个参数
  }
  return arr;
}
// console.log(flatten2(arr));

function flatten3(arr) {
  return arr.flat(Infinity);
}
// console.log(flatten3(arr));
