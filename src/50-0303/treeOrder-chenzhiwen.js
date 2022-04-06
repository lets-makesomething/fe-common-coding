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
}

/**
 * 前序遍历
 * @param {*} root 
 * @returns 
 */
let preOrderTraversal = root => {
  let result = []
  let preOrderTraverseNode = node => {
    if(node) {
      result.push(node.val)
      preOrderTraverseNode(node.left)
      preOrderTraverseNode(node.right)
    }
  }
  preOrderTraverseNode(root)
  return result
}

/**
 * 中序遍历
 * @param {*} root 
 * @returns 
 */
let inOrderTraversal = root => {
  let result = []
  let inOrderTraverseNode = node => {
    if(node) {
      inOrderTraverseNode(node.left)
      result.push(node.val)
      inOrderTraverseNode(node.right)
    }
  }
  inOrderTraverseNode(root)
  return result
}

/**
 * 后序遍历
 * @param {*} root 
 * @returns 
 */
let postOrderTraversal = root => {
  let result = []
  let postOrderTraverseNode = node => {
    if (node) {
      postOrderTraverseNode(node.left)
      postOrderTraverseNode(node.right)
      result.push(node.val)
    }
  }
  postOrderTraverseNode(root)
  return result
}

export { bt, preOrderTraversal, inOrderTraversal, postOrderTraversal }
