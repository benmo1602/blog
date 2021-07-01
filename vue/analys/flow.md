### 2 种方式：
    
    类型推断：通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型。

    类型注释：事先注释好我们期待的类型，Flow 会基于这些注释来判断。

        类型注释是以冒号 : 开头，可以在函数参数，返回值，变量声明中使用。
        若想任意类型 T 可以为 null 或者 undefined，只需类似如下写成 ?T 的格式即可。

        flow
        ├── compiler.js        # 编译相关
        ├── component.js       # 组件数据结构
        ├── global-api.js      # Global API 结构
        ├── modules.js         # 第三方库定义
        ├── options.js         # 选项相关
        ├── ssr.js             # 服务端渲染相关
        ├── vnode.js           # 虚拟 node 相关
    
    参考: https://ustbhuangyi.github.io/vue-analysis/prepare/flow.html#flow-%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F