###  node 函数式编程, 由事件驱动执行的单线程模型 (与javascript 一样)

    1. 输出   module.exports

    2. 全局 对象 global

    3. process

        process.version //版本

        process.platform

        process.arch()

        process.cwd() // 当前路径

        process.chdir(src) // 切换当前工作目录到src

        process.nextTick()  // 下一次响应执行

        process 监听 exit 事件 在程序 即将退出时 回调

## 内置模块

    1. fs 模块就是文件系统模块，负责读写文件 同时提供异步和同步的方法
