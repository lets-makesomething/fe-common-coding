/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

function getUrlParams(params) {
  const url = "https://baidu.com?a=1&b=2&c=3";
  let theRequest = {};
  const index = url.indexOf("?");
  if (index !== -1) {
    const str = url.slice(index + 1);
    const strsArr = str.split("&");
    strsArr.forEach((item) => {
      const [key, value] = item.split("=");
      theRequest[key] = decodeURIComponent(value);
    });
  }
  return theRequest[params];
}

console.log(getUrlParams("a"));
