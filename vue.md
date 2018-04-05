#vue 17-9

//在一些不常用的 知识 过段时间就会遗忘 当再次使用的时候有需要重新学习 浪费成本
console.log(([][]]+[])[+!![]]+([]+{})[!+[]+!![]])

vue

1. vue-router
   params: /:id  
    query: ?name=dell

数据的获取：
<div>{{$route.params.id}}</div>
<div>{{$route.query.name}}</div>

12/29

2. v-lazy 加载的 图片 由于不知道 height 会导致 scroll 滑动的 划不到底

      // 修改 图片 路径  解决 https 资源下 加载 http的 图片导致图片 首次 渲染 不出
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

