/**
        * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

            in : [4,1,2,1,2]
            output: 4

            in : [1 , 1, 2]
            output: 2
        */

const onceUnit = (arr) => {
  if (arr.length === 0) {
    return "数组不能为空";
  }
  const getCount = (item, arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  };

  const newArr = arr.filter((item) => {
    return getCount(item, arr) !== 2;
  });
  return newArr[0];
};
console.log(onceUnit([4, 1, 2, 1, 2]), "onceUnit");
