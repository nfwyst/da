// 节点
class StackNode {
  public next: StackNode | null = null
  constructor(public value: any) { }
}

// 栈结构
class Stack {
  public top: StackNode | null = null
  public bottom: StackNode | null = null
  public length: number = 0

  // 返回栈顶
  peek(): StackNode | null {
    return this.top
  }

  // 入栈
  push(value: any): Stack {
    const node = new StackNode(value)
    if (!this.top) {
      this.top = node
      this.bottom = node
    } else {
      const oldTop = this.top
      this.top = node
      this.top.next = oldTop
    }
    this.length++
    return this
  }

  // 出栈
  pop(): any {
    const top = this.top
    if (!this.top || !top) return top
    if (this.top === this.bottom) this.bottom = null
    this.top = this.top.next
    this.length--
    return top.value
  }
}

export default Stack
