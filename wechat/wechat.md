# 微信小程序 开发 18-1 

### 1. 列表 渲染 
  
    'wx:for=" "  wx:for-item="" wx:for-index=""'
    for-item 控制 微信关键字  
    item 遵循 最近原则 但是 个人习惯 还是自定义 命名 更为  方便 
 
### 2. 条件渲染 
    使用过程中 发现 v-if 有时也有效 
    class 控制 可以 通过 {{ true ? 'actived' : ''}} 


- [支付接口方法调用必须在addevent里边调用](http://www.cnblogs.com/true_to_me/p/3565039.html)
```javascript
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady(){
    that.initOrder();
}, false);
```

- 支付接口方法调用必须在
```javascript
WeixinJSBridge.invoke('getBrandWCPayRequest', d, function(res){
    if(res.err_msg == "get_brand_wcpay_request:ok"){
        // alert("支付成功");
        // union.release(d.orderId);
        resetUrl();
        paySuccess('home', d.orderId);
    } else {
        cancelOrder(d.orderId);
        // alert(res.err_msg);
    }
    loading.hide();
});
```