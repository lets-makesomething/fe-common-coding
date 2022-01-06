/*
 * @Author: guoweiwei 
 * @Date: 2022-01-06 18:36:04 
 * @Last Modified by:   guoweiwei 
 * @Last Modified time: 2022-01-06 18:36:04 
 */

/**
 * 从url中获取参数对象
 * @param {*} url 目标地址
 * @returns 
 */
function parseUrl(url) {
    const paramsArr = url ? url.split("?")[1].split("&") : [];
    const params = {};
    for (let i = 0, l = paramsArr.length; i < l; i++) {
      const param = paramsArr[i].split("=");
      params[param[0]] = param[1];
    }
    return params;
  }
  const testStr="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=react&fenlei=256&rsv_pq=9172117c000017e9&rsv_t=8122M7o7nnZTb9d8IwbHlrbTOg0SWgL6s9UPnojG%2Bdu0J2DHWhyQzpBf5d0&rqlang=cn&rsv_dl=tb&rsv_enter=1&rsv_sug3=5&rsv_sug1=5&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=1101&rsv_sug4=1101&rsv_sug=1";
  const paramsObj=parseUrl(testStr);
  console.log(paramsObj,"paramsObj") 