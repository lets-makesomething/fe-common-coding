function throttle(fn,time){
    let canUse = true ; // 设置一个开关
     return function(){
       if(!canUse ){ return false } // 如果开关已经关掉了就不用往下了
       // if(canUse) fn.apply(this,arguments)//fn放这里是立即执行
       canUse  = false  // 利用闭包刚进来的时候关闭开关
       setTimeout( ( ) => {
           console.log("执行了")
          fn.apply(this,arguments)//fn放这里是非立即执行，定时器结束才执行
          canUse = true // 执行完才打开开关
       },time)
   }
// 刚开始canUse为true，不会进入return，然后将canUse重置为false,进入了定时器，在定时器的时间期限之后，才会将canUse重置为true,canUse为true之后，之后的点击才会生效
// 在定时器的时间期限内，canUse还没有重置为true，会一直进入return，就实现了在N秒内多次点击只会执行一次的效果
}
//在dom中新增一个id为test的元素，连续点击测试
document.getElementById("test").onclick=throttle(add,1000);