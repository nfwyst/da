class ArrayStack {
  public array: any[] = []

  // 返回栈顶
  public peek(): any {
    return this.array[this.array.length - 1]
  }

  // 入栈
  public push(value: any): ArrayStack {
    this.array.push(value)
    return this
  }

  // 出栈
  public pop(): any {
    return this.array.pop()
  }
}

export default ArrayStack
