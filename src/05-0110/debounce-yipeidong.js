/**
 * @description 函数防抖
 */

function debounce( fn ) {
  let timmer = null

  return function() {
    clearTimeout(timmer)
    timmer = setTimeout(() => {
      fn( ...arguments )
    }, 500)
  }
}