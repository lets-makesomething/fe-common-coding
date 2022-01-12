function throttle(func,delay){
    var timer=null;
    return function(){
        var context=this;
        var args=arguments;
        if(!timer){
            timer=setTimeout(function(){
                func.apply(content,args);
                timer=null;
            },delay);
        }
    }
}