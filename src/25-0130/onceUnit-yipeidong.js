

/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

    in : [4,1,2,1,2]
    output: 4

    in : [1 , 1, 2]
    output: 2
 */

const onceUnit = arr => {
  for(let i = 0; i < arr.length; i++) {
    const deleteUnit = arr.splice(i,1)[0]
    if(arr.includes(deleteUnit)) {
      arr.splice(i,0, deleteUnit)
      continue
    } else return deleteUnit
  }
}