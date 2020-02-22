class MyArray {
  public length = 0
  public data: { [key: string]: any } = {}

  // 查询
  public get(index: number): any {
    return this.data[index]
  }

  // 插入
  public push(item: any): number {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  // 弹出
  public pop(): any {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  // 删除
  public delete(index: number): any {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }

  // 向左缩进
  private shiftItems(index: number): void {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }

  // 向右缩进
  private unShfitItems(index: number): void {
    for (let i = this.length; i > index; i++) {
      this.data[i] = this.data[i - 1]
    }
    this.length++
  }

  // 插入
  public insert(index: number, item: any): number {
    this.unShfitItems(index)
    this.data[index] = item
    return this.length
  }
}

export default MyArray
