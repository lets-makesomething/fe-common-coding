
/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

function getUrlParams(url, param) {
  const args = {};
  const index = url.indexOf('?')
  const params = index > 0 ? url.substring(index + 1) : '';
  const arr = params.split('&').map(str => str.split('='));

  for (const item of arr) {
    const name = item[0];
    const value = Number(item[1]);

    args[name] = value;
  }
  return args[param] || '';
}

getUrlParams('https://baidu.com?a=1&b=2&c=3', 'a');