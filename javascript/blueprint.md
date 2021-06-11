```javascript
var eventEmitter = {
    on : function(event,listener){
        if(typeof this[event] !== 'undefined')
            this[event].push(listener) ;
        else
            this[event] = [listener] ;
    } ,
    emit : function(event){
        if(typeof this[event] !== 'undefined'){
            var listeners = this[event] ;
            var length = listeners.length,index = length ;
            var args = Array.prototype.slice.call(arguments,1) ;

            while(index){
                var listener = listeners[length - (index--)] ;
                listener.apply(this,args) ;
            }
        }
    }

} ;
```



```javascript
Object.prototype.extend = function(){
    var hasOwnProperty = Object.hasOwnProperty ;
    var object = Object.create(this) ;
    var length = arguments.length ;
    var index = length ;

    while(index){
        var extension = arguments[length - (index--)] ;
        for(var property in extension){
            if(hasOwnProperty.call(extension,property)||
                typeof object[property] === 'undefined'){
                //这里同样应该使用深复制
                object[property] = extension[property] ;
            }
        }
    }
    return object;

} ;
```



```javascript
Object.prototype.instanceof = function(prototype){
    var object = this ;
    do{
        if(object === prototype) return true ;
        var object = Object.getPrototypeOf(object) ;
    }while(object) ;
    return false ;
}

function eventEmitter(){
    var evnets = Object.create(null) ;

    this.on = function(event,listener){
        if(typeof events[event] !== 'undefined')
            events[event].push(listener) ;
        else
            events[event] = [listener] ;
    } ;
    this.emit = function(event){
        if(typeof events[event] !== 'undefined'){
            var listeners = events[event] ;
            var length = listeners.length ,index = length ;
            var args = Array.prototype.slice.call(arguments,1) ;
        }
    } ;

} ;
```



```javascript
Object.prototype.extend = function(){
    var hasOwnProperty = Object.hasOwnProperty ;
    var object = Object.create(this) ;
    var length = arguments.lenght ;
    var index = length ;

    while(index){
        var extension = arguments[length - (index--)] ;
    
        for(var property in extension){
            if(property !== 'clones' &&
                hasOwnProperty.call(extension,property) ||
                typeof object[property] === 'undefined')
                object[property] = extension[property] ;
    
            if(hasOwnProperty.call(extension,'clones')){
                extension.clones.unshift(object) ;
            } else{
                extension.clones = [object] ;
            }
        }
    return object;

} ;



```



```javascript
function blueprint(f){
    var g = function(){
        f.apply(this,arguments) ;
        g.clones.unshift(this) ;
    } ;
    g.clones = [] ;
    return g ;
} ;


var eventEmitter = blueprint(function(){
    var events = Object.create(null);
    this.on = function (event, listener) {
        if (typeof events[event] !== "undefined")
            events[event].push(listener);
        else events[event] = [listener];
    };

    this.emit = function (event) {
        if (typeof events[event] !== "undefined") {
            var listeners = events[event];
            var length = listeners.length, index = length;
            var args = Array.prototype.slice.call(arguments, 1);
    
            while (index) {
                var listener = listeners[length - (index--)];
                listener.apply(this, args);
            }
        }
    };

}) ;
```

蓝图需要特别注意。尽管对于蓝图的修改会被发送到它的克隆，

但是蓝图的新的克隆并不会反映这些修改。幸运的是这个问题的解决方法很简单。

我们只需要对blueprint方法进行小小的修改，然后任何对于蓝图的修改就会反映在克隆上了

```javascript
function blueprint(f) {
   var g = function () {
     f.apply(this, arguments);
     g.clones.unshift(this);

     var hasOwnProperty = Object.hasOwnProperty;

     for (var property in g)
         if (property !== "clones" && hasOwnProperty.call(g, property))
         this[property] = g[property];
   };
   g.clones = [];
   return g;
}
```

