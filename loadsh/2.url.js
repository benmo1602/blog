
/**
 * --- 题目描述 ---
 *
 * 实现一个 parseParem 函数，将 url 转化为指定结果
 *
 * --- 测试用例 ---
 *
 * 输入：url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
 * 输出：
{
 user:'anonymous',
 id:[123,456],// 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
 city:'北京',// 中文需解码
 enabled: true // 未指定值的 key 与约定为 true
}
 */

const getQuery = (url) => {
  const arr = url.split("?")[1].split("#")[0].split("&");
  const obj = {};
  arr.forEach(el => {
    let [name, value] = el.split("=");
    if(!value) {
      obj[name] = true
    } else {
      if(name in obj) {
        Array.isArray(obj[name]) ? obj[name].push(value) : obj[name] = [obj[name], value];
      }else {
        obj[name] = decodeURI(value);
      }
    }
  })
  return obj;
}
// console.log(getQuery('http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'))
