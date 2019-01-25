## react

  1. 代码模块化、组件化使代码复用性更强;
  2. 虚拟dom节省性能 . 前端页面中消耗性能最大的就是dom的操作，渲染页面的并不是真正的dom，而是一些列一些js对象，称之为虚拟dom
    虚拟dom采用diff算法，就是在渲染页面时候，不会全部进行渲染，只会比对不同的地方进行渲染，这样较少的操作dom，就提升了性能。

    映射到真实dom，新生成的dom和页面上的dom作比较，比较出来有差异去改dom，dom的比较很耗性能，两个js对象的比较很快，提升性能，真实dom
    比对例子就是backboune，diff算法，是进一步提升性能，同级比较，很多东西放在一起搞，jq 性能更高，因为没有比较的过程虚拟dom如何提升性能，实
    际性能的耗费在于dom元素的比较，一个老的框架backboune就是一个很好的例子，在react中比较的不是真实dom，虚拟dom实际就是js对象，js对象的比较
    当然节省性能，react采用的diff算法也比较节省性能，在react中，构建UI界面是靠数据驱动的，不同的数据状态就需要渲染不同的页面，就是对不同地方
    的一个比较(之前跟人扯皮虚拟dom到底快不快)

## react的优化


    react有一个生命周期函数 shouldComponentUpdate,来控制react的更新  假如你有个带有多个对话的消息应用，如果只有一个对话发生改变，
    如果我们在 ChatThread 组件执行 shouldComponentUpdate，React 可以跳过其他对话的重新渲染步骤合理的组件拆分，提高代码的可维护性和可复用性，

    用flux和redux来控制数据的传输和数据的共享，react非父子组件数据传输难度很大，把公用的数据放在store里，
    自身的数据有自身state存储，都存在store里，每次加载数据的时候不需要的地方也会被重新加载，容易造成性能的浪费。

    循环的时候key值里面不要出现index， bind函数定义作用域的时候，要在constructor 里面定义bind里面定义this指向
    循环放在return前面只是代码显得好看，对性能没有提升
    跟页面渲染有关的数据存在state里面，页面固定的值自定义放在constructor里面

      无状态组件

      可以给diff算法提供支持，从而提升虚拟dom的比对性能

## react里面的继承

  raact里面的继承就是  ...Component extends React.Component{}  通过extends把生命周期函数继承下来。

## react生命周期


  1 getDefaultProps() 初始化组件状态
  2 componentWillMount() 准备加载组件是时调用
  3 componentDidMount() 组件加载完以后调用
  4 componentWillReceiveProps() 在组件收到新的属性时进行调用
  5 shouldComponentUpdate() 当组件收到新的属性或是状态改变的时候
  6 componentWillUpdate() 更新组件时调用，要求shouldComponentUpdate()的返回值是true。
  7 componentDidUpdate() 调用了render（）更新完界面之后，调用
  8 componentWillUnmount() 页面组件被移除时调用
  9 render()渲染页面


  shouldComponentUpdate(object.nextProps,object.nextState),返回值是true或者是false 如果返回false，后面的生命周期函数都不会执行。

  ## react传值

    父组件向子组件传值，通过props
    子组件向父组件传值，子组件需要控制自己的state，然后告诉父组件自己的state，通过props调用父组件中用来控制state的函数，在父组件找那个
    展示子组件的state的变化。要想调用，父组件必须把要被调用的方法以属性的方式放在子组件上，子组件可以通过this.props.被调用的方法  这样
    的方式来获取父组件传过来的方法。

    父组件调用子组件的方法：
    在reactjs中有个ref的属性，这个属性就像给组件起个引用名字一样，子组件被设置为ref之后，便可以通过this.refs.xxx来获取到子组件了.

    <input type="text" ref={(input)=>{this.input = input}}/>

    ref的作用是获取dom元素，这条例子就是获取到input元素，this.input 可以获取到输入的值.
