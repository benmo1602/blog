/*
 * 工具类
 * 请自定义方法后，添加方法注释，并且署名！
 * 注释格式如下
 */
/*
 * @intro    xxxxxx(方法简介)
 * @param    prarm：xxxx（参数简介）
 * @return   xxxx（返回值内容）
 * @author   xxx（作者）
 */
let util ={
      setSession : function(key, data) {
            //判断key
            if(typeof key != "string" || key=="" || key.replace(" ","").length==0){
                console.log("error:请输入有效的session的key！");
                return;
            };
            //判断是否为对象，是对象则转换成为json字符串
            if(typeof data=="object"){
                sessionStorage.setItem(key, JSON.stringify(data));
            }else{
                sessionStorage.setItem(key, data);
            };
        },
        /*
         * @intro    获取session
         * @param    key：session的key
         * @return   data：session的内容
         * @author   ~~
         */
        getSession : function(key) {
            //判断key
            if(typeof key != "string" || key=="" || key.replace(" ","").length==0){
                console.log("error:session的key有误！");
                return;
            }
            //获取session
            var value=sessionStorage.getItem(key);
            //返回值为json则转换为对象
            try {
                return JSON.parse(value);
            } catch (e){
                return value;
            }
        },
        /*
         * @intro    删除指定key的session
         * @param    key：session的key
         * @author   ~~
         */
        removeSession : function(key) {
            //判断key
            if(typeof key != "string" || key=="" || key.replace(" ","").length==0){
                console.log("error:session的key有误！");
                return;
            }
            sessionStorage.removeItem(key);
        },
        /*
         * @intro    清除所有session
         * @author   ~~
         */
        clearSession : function() {
            //清除所有的session
            sessionStorage.clear();
        },
        /*
         * @intro    设置session
         * @param    key：session的key
         *           data：session的内容
         * @return
         * @author   ~~
         */
        setLocal : function(key, data) {
            //判断key
            if(typeof key != "string" || key=="" || key.replace(" ","").length==0){
                console.log("error:请输入有效的session的key！");
                return;
            };
            //判断是否为对象，是对象则转换成为json字符串
            if(typeof data=="object"){
                localStorage.setItem(key, JSON.stringify(data));
            }else{
                localStorage.setItem(key, data);
            };
        },
        /*
         * @intro    获取session
         * @param    key：session的key
         * @return   data：session的内容
         * @author   ~~
         */
        getLocal : function(key) {
            //判断key
            if(typeof key != "string" || key=="" || key.replace(" ","").length==0){
                console.log("error:session的key有误！");
                return;
            }
            //获取session
            var value=localStorage.getItem(key);
            //返回值为json则转换为对象
            try {
                return JSON.parse(value);
            } catch (e){
                return value;
            }
        },
        /*
         * @intro    删除指定key的session
         * @param    key：session的key
         * @author   ~~
         */
        removeLocal : function(key) {
            //判断key
            if(typeof key != "string" || key=="" || key.replace(" ","").length==0){
                console.log("error:session的key有误！");
                return;
            }
            localStorage.removeItem(key);
        },
        /*
         * @intro    清除所有session
         * @author   ~~
         */
        clearLocal : function() {
            //清除所有的session
            localStorage.clear();
        },
        getStyle:function(DOM,name){
            if(DOM.currentStyle){
                return DOM.currentStyle[name];
            }else{
                return getComputedStyle(DOM,false)[name];
            }
        },
        move:function(DOM,attr,target){
            clearInterval(DOM.timer);
            DOM.timer=setInterval(function(){
                if(attr=='opacity'){
                    var cur=Math.round(parseFloat(this.getStyle(DOM,attr))*100)
                }else{
                    var cur=parseInt(this.getStyle(DOM,attr));
                }
                var speed=(target-cur)/6;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(cur==target){
                    clearInterval(DOM.timer);
                    DOM.style.display= 'none';
                }else{
                    if(attr=='opacity'){
                        DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
                        DOM.style.opacity=(cur+speed)/100;
                    }else{

                        DOM.style[attr]=cur+speed+'px';
                    }
                }
            },30)
        },
        setCookie:function(_name, _value, _date){
            var d=new Date();
            d.setDate(d.getDate()+_date);
            document.cookie=_name+"="+encodeURIComponent(_value)+";path=/;expires="+d.toGMTString();  
        },
        getCookie:function(_name){
            var str=document.cookie;
            var arr=str.split("; ");
            for(var i=0; i<arr.length; i++){
                var col=arr[i].split("=");  
                if(col[0]==_name){
                    return decodeURIComponent(col[1]);
                }
            }
            return "";
        },
        removeCookie:function(name){
            this.setCookie(name,'',-1)
        },
        imgUrlReplace (data) {
            if( data && data.length > 0) {
                (data).map(function(value, index) {
                    data[index].simg = value.simg.replace('http','https');
                })
               
            }
             return data;
        }
}
export default util
