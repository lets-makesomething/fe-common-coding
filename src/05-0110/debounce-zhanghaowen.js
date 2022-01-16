/**
 * @description 函数防抖
 * @params fn(Function) 实际要执行的函数
 * @params delay 延迟时间（ms）
 * @returns (Function) 返回一个函数
 */

function debounce(fn, delay = 500) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args);
    },delay);
  };
}
