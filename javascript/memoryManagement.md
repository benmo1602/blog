关于内存回收 

### 	 内存生命周期

#### 	js 内存分配

 1. 声明 

 2. 函数调用 

    ```
    使用值 实际上是对 数据的 读取 写入操作 
    ```

###  内存释放 

####   垃圾回收

##### 引用计数 垃圾收集 

​	限制 ：循环引用

#####  标记-清除算法

从对象是否被需要， 到数据是否还可以获得 

```
从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。所有对JavaScript垃圾回收算法的改进都是基于标记-清除算法的改进，并没有改进标记-清除算法本身和它对“对象是否不再需要”的简化定义。
```

### [多个运行时互相通信](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#多个运行时互相通信)

一个 web worker 或者一个跨域的 `iframe` 都有自己的栈、堆和消息队列。两个不同的运行时只能通过 [`postMessage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 方法进行通信。如果另一个运行时侦听 `message` 事件，则此方法会向该运行时添加消息。

## [永不阻塞](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#永不阻塞)

JavaScript的事件循环模型与许多其他语言不同的一个非常有趣的特性是，它永不阻塞。 处理 I/O 通常通过事件和回调来执行，所以当一个应用正等待一个 [IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) 查询返回或者一个 [XHR](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 请求返回时，它仍然可以处理其它事情，比如用户输入。