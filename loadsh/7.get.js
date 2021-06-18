// 模拟 lodash 中的 _.get() 函数
/*
 * 输入：
 * const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};
 * get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
 * 输出：
 * ['FE coder', 1, 'byted']
*/
const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};

function get(object, ...path) {
  return path.map((item) => {
      let res = object;
      item.replace(/\[/g, ".")
          .replace(/\]/g, "")
          .split('.')
          .map(path => res = res && res[path]);
      return res;
  })
}

console.log( get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name'));
