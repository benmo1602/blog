#vue 17-9

//在一些不常用的 知识 过段时间就会遗忘 当再次使用的时候有需要重新学习 浪费成本
console.log(([][]]+[])[+!![]]+([]+{})[!+[]+!![]])

**VUE.JS 是什么**

    是一款构建用户界面的渐进式框架，Vue的核心库只关注视图层，Vue不支持IE8及以下版本浏览器
    靠谱的插件在 awesome-vue

**VUE 的生命周期**

    beforeCreate（创建前）,
    created（创建后）,
    beforeMount(载入前),
    mounted（载入后）,
    beforeUpdate（更新前）,
    updated（更新后）,
    beforeDestroy（销毁前）,
    destroyed（销毁后）

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

** 使用总结 **

在 Vue 中，父子组件的关系可以总结为 props down， events up  
 父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息

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

        slot 具名slot的用法

        ![img](/vimg/Image.png)

**1. vue-router**

    params: /:id  
    query: ?name=dell

数据的获取：

<div>{{$route.params.id}}</div>
<div>{{$route.query.name}}</div>

12/29

2.  v-lazy 加载的 图片 由于不知道 height 会导致 scroll 滑动的 划不到底

    // 修改 图片 路径 解决 https 资源下 加载 http 的 图片导致图片 首次 渲染 不出
    filter: {
    progressive (listener, options) {
    const isCDN = /zhaolin/
    if (isCDN.test(listener.src)) {
    listener.el.setAttribute('lazy-progressive', 'true')
    }
    },
    webp (listener, options) {
    if (!options.supportWebp) return
    const isCDN = /zhaolin/
    if (isCDN.test(listener.src)) {
    listener.src = listener.src.replace(/http\:/,'https:')
    }
    }
    }

    1/19  
     v-lazy 加载的 图片   在 swiper 做 banner 出现 虚拟页 使用 :src

1/19
better-scroll 嵌套 swiper

    <div class="groupbox" ref="groupbox">
        <!-- swiper  页面  -->
        <swiper :options="swiperOption" ref="mySwiper">
        <!-- v-for="slide in imgsInfo" -->
            <swiper-slide v-for="(slide,pindex) in groupAllInfo">
                <div class="group-centent" >
                    <!--  banner -->
                    <div class="banimg" v-if="slide.bgimg">
                            <img v-lazy="slide.bgimg + signmax" alt="">
                    </div>
                    <!-- 动态组件 -->
                    <goods-list @refreshbizlines="refSwiperGroupbox" ></goods-list>
                </div>
            </swiper-slide>
        </swiper>
    </div>


    swiperindex:0,
        swiperOption: {
            direction : 'horizontal', //水平方向滑动
            //shortSwipes: false,
            autoHeight: true,
            observeParents:true,//当Swiper的父元素变化时，例如window.resize，Swiper更新
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            on:{
                slideChange() {

                        // 记录 历史top 值
                        _this.swiperindex = this.activeIndex;
                        _this.activeId = _this.aNavIds[this.activeIndex];
                        // 左右挪动切换
                        _this.adjustmentNavScroll();
                        _this.refScrollGroupbox();
                },
                slideChangeTransitionStart() {
                        if( _this.groupScroll ) {
                                    _this.arrTop[this.previousIndex] = _this.groupScroll.startY;
                        };
                },
                slideChangeTransitionEnd () {
                        _this.$refs.mySwiper.$el.style.height = window.getComputedStyle(_this.$refs.mySwiper.$children[this.activeIndex].$el).height
                        // 在swiper 切换完成 回到记录高度  
                        setTimeout(() => {
                                    _this.groupScroll.scrollTo(0, _this.arrTop[this.activeIndex], 300, '');
                        },200)
                },
                resize: function(){
                //窗口变化了
                console.log('窗口变化了')
            }
        }
    }

    adjustmentNavScroll() {
            if(this.swiperindex > 3){
                        let a = -parseInt((this.swiperindex -3)*13.5/75*(document.documentElement.clientWidth))
                        this.NavScroll.scrollTo(a, 0, 300, 'easing')
            }else {
                        this.NavScroll.scrollTo(0, 0, 300, 'easing')
            }
    },
    refSwiperGroupbox(str) {
            //console.log(str)
            setTimeout(()=> {
                        //console.log(window.getComputedStyle(this.$refs.mySwiper.$children[this.swiperindex].$el).height)
                        this.$refs.mySwiper.$el.style.height = window.getComputedStyle(this.$refs.mySwiper.$children[this.swiperindex].$el).height;
                        //this.$refs.mySwiper.swiper.updateSize();
                        this.refScrollGroupbox();
            },300)

    }
