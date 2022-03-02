/**
 * tree的 深度和广度遍历
 */

const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 4,
          children: [],
        },
      ],
    },
    {
      val: 3,
      children: [
        {
          val: 5,
          children: [],
        },
      ],
    },
  ],
}

/**
 * 深度优先遍历，也就是前序遍历
 * @param {*} root 
 * @returns {number[]}
 */
let dfs = (root) => {
  let result = []
  ;(function func(root) {
    if (root) result.push(root.val)
    if (root && root.children[0]) func(root.children[0])
    if (root && root.children[1]) func(root.children[1])
  })(root)
  return result
}

/**
 * 广度优先遍历，也就是层序遍历
 * @param {*} root 
 * @returns 
 */
let bfs = (root) => {
  let result = []
  if (!root) return result
  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let currentLength = queue.length
    result.push([])
    for (let i = 0; i < currentLength; i++) {
      console.log('queue', queue)
      let node = queue.shift()
      console.log('node', node)
      result[result.length - 1].push(node.val)
      if (node.children[0]) {
        queue.push(node.children[0])
      }
      if (node.children[1]) {
        queue.push(node.children[1])
      }
    }
  }
  return result
}

export { dfs, bfs, tree }
