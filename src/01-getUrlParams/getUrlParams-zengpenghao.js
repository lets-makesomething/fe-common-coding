/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

function getUrlParams(key, url) {
  const urlSearch = url ? url.split('?')[1] : window.location.search;
  const obj = Object.fromEntries(new URLSearchParams(urlSearch));
  return obj[key];
}
