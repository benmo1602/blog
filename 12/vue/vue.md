**VUE.JS 是什么**

    是一款构建用户界面的渐进式框架，Vue的核心库只关注视图层，Vue不支持IE8及以下版本浏览器
    靠谱的插件在 awesome-vue

**VUE 的生命周期**

    beforeCreate: 组件实例刚刚被创建,组件属性计算之前,如data属性
    created: 组件实例创建完成,属性已绑定,但是DOM还未完成,$el属性还不存在
    beforeMount:模板编译/挂载之前
    mounted: 模板编译/挂载之后
    beforeUpdate: 组件更新之前
    updated: 组件更新之后
    activated: for keep-alive,组件被激活时调用
    deactivated: for keep-alive,组件被移除时调用
    beforeDestroy: 组件销毁前被调用
    destoryed: 组件销毁后调用


**VUE 的一些基础用法**

    事件修饰符：
        // 阻止单击事件冒泡
        &lt;a v-on:click.stop="doThis">&lt;/a&gt;

        // 提交事件不再重载页面
        &lt;from v-on:submit.prevent="onSubmit"> &lt;/from>

        // 修饰符可以串联
        &lt;from v-on:click.stop.prevent="doThat"&gt; &lt;/from&gt;

        //只有修饰符
        &lt;from v-on:submit.prevent  &gt; &lt;/from &gt;

        //添加事件侦听器时使用事件捕获模式
        &lt;div v-on:click.capture="doThis"&gt; &lt;/div&gt;

        //只当事件在该元素本身（比如不是子元素）触发时触发回调
        &lt;div v-on:click.self="doThat"&gt; &lt;/div&gt;

        .lazy 在输入时不更新，在change时改变

        .number 自动将用户的输入值转为数字
        .trim 自动过滤用户输入的首尾空格
        .sync 通过子组件来改变父组件的值  有这个标识更容易区分是用来改变父组件的代码

        在&lt;ul>、&lt;ol&gt;、&lt;table&gt;、&lt;select&gt;里面使用组件时，要用is  例&lt;tr is="my-row">&lt;/tr>加载my-row模块

        通过Vue构造器传入的各种选项大多数都可以在组件里用，但是data必须是一个函数
            例： data: function() {
                return{
                    counter: 0
                }
            }
            data () {

            }

**使用总结**

    在 Vue 中，父子组件的关系可以总结为 props down， events up  
        父组件通过 props 向下传递数据给子组件，
        子组件通过 events 给父组件发送消息

        html特性是不区分大小写的， 当时用的不是字符串模板，驼峰命名的prop需要转换为相对应的短线隔开式命
        名  my-message  mySessage

        在props里面some-prop=“1”传递的是字符串"1",要想传数字 必须v-bind:some-prop="1"

        单向数据流的问题：prop是单向绑定的，当父组件书性变化时，会将最新的prop传递给子组件，但是不会反
        过来，防止子组件无意间修改父组件的值，所以不应再子组件修改prop
        子组件用父组件值的时候要经过深拷贝再来用 JSON.parse(JSON.stringify())

        每个Vue实例都实现了事件接口  使用$on(eventName)监听事件  使用$emit(eventName)触发事件 通过子组
        件发送出去

        正常来说 v-model 只有input ，radio， checkbox， select这几个标签可用 ，然而有时候我们希望组件
        也能实现V-model这样的语法糖效果，怎么做呢？ <component v-model="name"> component 内部，数据
        有改变的时候要发出一个input事件

        非父子组件传值  bus的问题 发布订阅模式  实际上就是提供了on和emit方法的对象 子组件在创建的时候监
        听了bus的变化，一变化就把自己的内容改变, 在mothods里面通过$emit的方法里面：
            在自身事件被触发的时候，通过bus.$emit来向外周知其他组件，根据我的值来变化  
            on相当于发布模式的监听 emit相当于发布

        keep-alive  把切换出去的组件保留在内存中，可以保留他的状态或避免重新渲染，渲染一次后可以存在内存
        里，再用的时候就不用重新渲染了 用来提升性能

        内联模板：如果子组件有inline-template 子组件里的东西就不在是solt 而是template
        ：相当于bind @相当于on

**slot **

    具名slot的用法

    父组件的template
    ``
        <div id="root">
            <child>
                <div slot="four">第四</four>
                <div slot="three">第三</div>
            </child>
        </div>
    ``
    子组件的template
    ``
        const Child = {
            template:`<div>
                        <slot name="four"></slot>
                        <slot name="three"></slot>
                    </div>`
        }
    ``

**Vue 组件的 API 来自三个部分**

    props 允许外部环境传递数据给组件
    Events 允许从外部环境在组件内触发副作用
    Slots 允许外部环境精额外的内容组合在组件中

**给组件绑定原生事件**

    用.native修饰v-on  例如 <my-component v-on:click.native="dotherthing"></my-component>

**双向绑定**
` var vm = new Vue({
data: {
a: 123
}
})

        // 不可以实现双向 绑定
        vm.$data.b = 123;

        // 可以实现双向绑定
        Vue.set(vm.$data,"b", "123")
        vm.$set(vm.$data, "b","123")`

**VUEX**

    state:存贮公共数据的地方
    Getters：获取公共数据的地方
    mutations：放的是同步的操作和reducer有点像  通过store的commit方法来让mutations执行
    action：放的是异步的操作  通过dispatch的方法让action里面的方法执行
    context是store的一个副本

    Vuex就是提供一个仓库，store仓库里面放了很多对象其中state即使数据源存放地，

    开始创建store实例：
        new Vuex.store({state, getters, mutations, actions})
        vuex可以集中管理组件的变化。以插件的形式进行引用
        我们通常把应用级的状态放在store里面，
        同步改变状态的方式放在mutations里面，
        异步的放在action里面

        state负责存贮整个应用的状态数据，后期可以使用this.$store.state直接获取状态。
        Getters主要针对有些状态需要做二次处理，，通过this.$store.getters.valueName对派生出来的状态进行访问。
        plugins 就是一个钩子函数，在初始化store的时候可以引入。
        vuex里面处理数据，只能在mutations里面进行数据处理，actions里面把异步转化为同步，然后传到mutations里面进行处理

**vue-router**

    数据的获取： <div>{{$route.params.id}}</div>
                <div>{{$route.query.name}}</div>
            params: /:id   query: ?name=dell

**VUE 传值问题**

    一： 父组件向子组件传值：

        子组件在props中创建一个属性，用以接收父组件传过来的值，
        在父组件中要引入子组件，同时把需要传给子组件的值赋给该属性

        <child :childInfo="childInfo"></child>

        子组件 接收

        export default {
            data() {
                return {}
            },
            props: ["childInfo"]
        }

    二:子组件向父组件传值：
        子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件
        将需要传的值作为$emit的第二个参数。该值将作为实参传给响应自定义事件的方法
        在父组件中注册子组件，并在子组件标签上绑定对自定义事件的监听

        this.$emit("listenToChildEvent",data)

        父组件 接收
        <child v-on:listenToChildEvent="fn"></child>
    三：非父子组件的传值
    简单的非父子组件传值可以通过bus进行传值：
    先定义一个bus
        //bus.js
        import Vue from 'vue'
        export default new Vue()

        组件A：
    `        <template>
                <div>
                    A组件:
                    <span>{{elementValue}}</span>
                    <input type="button" value="点击触发" @click="elementByValue">
                </div>
            </template>
            <script>
                // 引入公共的bug，来做为中间传达的工具
                import Bus from './bus.js'
                export default {
                    data () {
                    return {
                        elementValue: 4
                    }
                    },
                    methods: {
                    elementByValue: function () {
                        Bus.$emit('val', this.elementValue)
                    }
                    }
                }
            </script>`
        组件B：
    ` <template>
            <div>
                B组件:
                <input type="button" value="点击触发" @click="getData">
                <span>{{name}}</span>
            </div>
        </template>
        <script>
            import Bus from './bus.js'
            export default {
                data () {
                    return {
                        name: 0
                    }
                },
                mounted: function () {
                    var vm = this
                    // 用$on事件来接收参数
                    Bus.$on('val', (data) => {
                        console.log(data)
                        vm.name = data
                    })
                },
                methods: {
                    getData: function () {
                        this.name++
                    }
                }
            }
        </script>`

**vue 的底层实现**

vue 是通过数据劫持的方式来做数据绑定，其中最核心的方法是通过 object.defineProperty()来实现。 

    1. 首先，需要利用 Object.defineProperty，将要观察的对象，转化成 getter/setter，以便拦截对象赋值与取值操作，称之为 Observer；

    2.  需要将 DOM 解析，提取其中的指令与占位符，并赋与不同的操作，称之为 Compiler；

    3.  需要将 Compile 的解析结果，与 Observer 所观察的对象连接起来，建立关系，在 Observer 观察到对象数据变化时，接收通知，同时更新 DOM，称之为 Watcher；

    4.  最后，需要一个公共入口对象，接收配置，协调上述三者，称为 Vue;
