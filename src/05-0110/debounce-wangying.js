/**
 * @description 函数防抖:防抖是指在一定的时间内再次触发此事件,会清空上次的事件重新开始,如果制定的时间内没有再次触发,那么这个事件才会执行
 */
function debounce(fn,wait) {
  let timer=null
  return function() {
    clearTimeout(timer);
    let _this =this
     timer =setTimeout(function() {
      fn.apply(_this,arguments)
    },wait)
  }
}
