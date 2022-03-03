/**
 * 树的前中后序遍历
 */

const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

// 先序遍历
var preorderTraversal = function(tree, result = []) {
  if (!tree) {
    return result;
  }

  result.push(tree.val);

  preorderTraversal(tree.left, result);
  preorderTraversal(tree.right, result);

  return result;
}

// 中序遍历
var inorderTraversal = function(tree, result = []) {
  if(!tree) {
    return result;
  }

  inorderTraversal(tree.left, result);
  result.push(tree.val);
  inorderTraversal(tree.right, result);

  return result;
}


var postorderTraversal = function(tree, result = []) {
  if (!tree) {
    return result;
  }

  postorderTraversal(tree.left, result);
  postorderTraversal(tree.right, result);

  result.push(tree.val)

  return result;
}