// 借鉴 jquery 方法

const class2type = {};
const typeList = "Boolean Number String Function Array Date RegExp Object Error Symbol Bigint";
typeList.split(" ").forEach(function (name) {
  class2type["[object " + name + "]"] = name.toLowerCase();
});

export const toType = function(obj) {
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object"
    ? class2type[toString.call(obj)] || "object"
    : typeof obj;
};
