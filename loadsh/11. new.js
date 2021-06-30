// 实现 new

function funcNew(Base) {
  const obj =  Object.create()
  obj.__proto__ = Base.prototype;
  return Base.call(obj);
}

// 加强版
function funcNew1(obj, ...args) {
  const newObj = Object.create(obj.prototype);
  const result = obj.apply(newObj, args);
  return (typeof result === 'object' && result !== null) ? result : newObj;
}
