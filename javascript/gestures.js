
/* 
*  滑动处理 
*  判断 手势  向上 或向下
*  1 向上  , 2 向下 ， 0 无操作 
*  这里不需要 省略  3 向左 ， 4向右   
*/
function gestures (doc,callback) {
    let startX, startY,endX, endY;
    doc = doc || document;
    doc.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX;  
        startY = e.touches[0].pageY; 
    });

    doc.addEventListener('touchend',function(e) {
        endX = e.changedTouches[0].pageX;  
        endY = e.changedTouches[0].pageY;  
        callback(GetSlideDirection(startX, startY, endX, endY)) ;

    });

    function GetSlideDirection(startX, startY, endX, endY) {  
        var dy = startY - endY;  
        //var dx = endX - startX;  
        if(dy>0) {//向上滑动  
            return 1;  
        }else if(dy<0){//向下滑动  
            return 2;  
        }  
        return 0;  
    }  
}

export default gestures

