// 树节点
class TreeNode {
  public left: TreeNode | null = null
  public right: TreeNode | null = null
  constructor(public value: any) { }
}

// 二叉搜索树
class BinarySearchTree {
  public root: TreeNode | null = null

  // 插入子树
  public insert(value: any) {
    const node = new TreeNode(value)
    if (!this.root) this.root = node
    else {
      let currentNode = this.root
      while (currentNode.left && currentNode.right) {
        if (currentNode.value <= value) {
          currentNode = currentNode.right
        } else {
          currentNode = currentNode.left
        }
      }
      if (currentNode.value <= value) {
        currentNode.right = node
      } else {
        currentNode.left = node
      }
    }
  }

  // TODO
  public lookup() { }
}

const tree = new BinarySearchTree()
tree.insert(100)
console.log(tree)
tree.insert(19)
console.log(tree)
tree.insert(198)
console.log(tree)
