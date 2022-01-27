/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */


function transferWords(s){
  // 分割空格，把单词拆开
  const word = s.split(' ');
  const upperWord = word.map(ele => {
    return ele.replace(/^\S/, function(s) {
      // 匹配第一个字符替换成大写
      return s.toUpperCase();
    })
  });
  return upperWord.join(' ');
} 