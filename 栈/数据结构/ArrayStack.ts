class ArrayStack {
  public array: any[] = []

  public peek(): any {
    return this.array[this.array.length - 1]
  }

  public push(value: any): ArrayStack {
    this.array.push(value)
    return this
  }

  public pop(): any {
    return this.array.pop()
  }
}

export default ArrayStack
