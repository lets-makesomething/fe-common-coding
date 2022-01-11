/**
 * @description 节流函数:防抖是指在一定的时间内再次触发此事件,会清空上次的事件重新开始,如果制定的时间内没有再次触发,那么这个事件才会执行。
 * @param {Function} fn
 */


// 时间戳版本：在持续触发事件的过程中，函数会立即执行
function throttle(func,wait) {
  let _this, args;
  let pre = 0 // 之前的时间戳
  return function() {
    _this = this
    args = arguments
    let now = new Date();
    if(now - pre >= wait){
      func.apply(_this,args)
      pre = now
    }
  }
}

// 定时器版本:在持续触发事件的过程中，函数不会立即执行，并且每 1s 执行一次，
// 在停止触发事件后，函数还会再执行一次。
function throttle(func,wait) {
  let _this, args,timer;
  return function() {
    _this = this;
    args = arguments
    timer=setTimeout(function () {
      timeout = null;
      func.apply(_this,args)
    },wait)
  }
}