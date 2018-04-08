** v-lazy 加载的 图片 **

        1. 在 swiper 做 banner 出现 虚拟页 使用 :src

        2. 由于不知道 height 会导致 scroll 滑动的 划不到底

        3.修改图片路径解决 https 资源下 加载 http 的 图片导致图片 首次 渲染 不出
            filter: {
                progressive (listener, options) {
                    const isCDN = /***/
                    if (isCDN.test(listener.src)) {
                        listener.el.setAttribute('lazy-progressive', 'true')
                    }
                },
                webp (listener, options) {
                    if (!options.supportWebp) return
                    const isCDN = /***/
                    if (isCDN.test(listener.src)) {
                        listener.src = listener.src.replace(/http\:/,'https:')
                    }
                }
            }
