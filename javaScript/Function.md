### 函数 

**arguments**

传入函数的实参，它是一个类数组对象

**caller** （非标准）

如果一个函数`f`是在全局作用域内被调用的,则`f.caller为``null`,相反,如果一个函数是在另外一个函数作用域内被调用的,则`f.caller指向调用它的那个函数`

该属性的常用形式`arguments.callee.caller`替代了被废弃的 [arguments.caller](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/caller).

**displayName**

**`function.displayName`** 属性获取函数的显示名称

**length**

