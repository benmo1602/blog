// deepClone
function deepClone(params = {}) {
  if(typeof params !== "object" || params == null) {
    return params;
  }
  let res = Array.isArray(params) ? [] : {};

  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      res[key] = deepClone(params[key]);
    }
  }
  return res;
}

// 浅 copy
// Object.assign 、 解构 、 数组 concat
