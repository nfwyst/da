// 节点
class QueueNode {
  public next: QueueNode | null = null
  constructor(public value: any) { }
}

// 队列
class Queue {
  public first: QueueNode | null = null
  public last: QueueNode | null = null
  public length = 0

  // 获取头部
  public peek(): QueueNode | null {
    return this.first
  }

  // 入队列
  public enqueue(value: any): Queue {
    const node = new QueueNode(value)
    if (!this.length) {
      this.first = node
      this.last = node
    } else {
      if (this.last) this.last.next = node
      this.last = node
    }
    this.length++
    return this
  }

  // 出队列
  public dequeue(): any {
    const item = this.first
    if (!item || !this.first) return item
    if (this.first === this.last) this.last = null
    this.first = this.first.next
    this.length--
    return item.value
  }
}

export default Queue
