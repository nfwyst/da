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

  // 查找节点
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

  // 删除节点 TODO
  public remove(value: any): boolean {
    // 如果是空树则返回
    if (!this.root) return
    // 当前节点
    let currentNode = this.root
    // 父节点
    let parentNode = null
    // 如果有节点可处理
    while (currentNode) {
      if (value < currentNode.value) {
        // 要删除的节点在左侧
      } else if (value > currentNode.value) {
        // 要删除的节点在右侧
      } else {
        // 当前节点需要被删除
        if (currentNode.right === null) {
          // 当前节点没有右子树
        } else if (currentNode.right.left === null) {
          // 当前节点有右子树， 但右子树没有左子树
        } else {
          // 当前节点有右子树， 且右子树有左子树
        }
      }
    }
    return true
  }
}

export default BinarySearchTree
