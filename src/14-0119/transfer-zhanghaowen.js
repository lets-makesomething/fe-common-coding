/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */

function transferWords(s) {
  const arr = s.split(" ");
  let string = "";
  arr.forEach((item) => {
    let everyString = "";
    let start = item.slice(0, 1);
    let end = item.slice(1, item.length + 1);
    everyString = start.toUpperCase() + end;
    string += everyString + " ";
  });
  return string;
}
