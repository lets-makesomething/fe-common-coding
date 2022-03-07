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
};

var bfs = function(tree) {
  const queue = [];
  const result = [];

  queue.push(tree);

  while(queue.length) {
    const top = queue[0];

    result.push(top.val);

    top.children.forEach(ele => {
      queue.push(ele);
    });

    queue.shift();
  }

  return result;
}

var dfs = function(tree, result = []) {
  if (tree) {
    result.push(tree.val);
    const children = tree.children;
    for(let i = 0, len = children.length; i < len; i++) {
      dfs(children[i], result);
    }
  }

  return result;
}