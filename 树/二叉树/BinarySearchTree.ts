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
  public insert(value: any): BinarySearchTree {
    const node = new TreeNode(value)
    if (!this.root) this.root = node
    else {
      let currentNode = this.root
      while (true) {
        if (currentNode.value <= value) {
          if (!currentNode.right) {
            currentNode.right = node
            return this
          }
          currentNode = currentNode.right
        } else {
          if (!currentNode.left) {
            currentNode.left = node
            return this
          }
          currentNode = currentNode.left
        }
      }
    }
    return this
  }

  public lookup(value: any): void | TreeNode {
    if (!this.root) return
    let currentNode: TreeNode | null = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        return currentNode
      }
    }
    return
  }
}

export default BinarySearchTree
