interface NodeItem {
  value: any,
  next: NodeItem | null
}

class LinkedList {
  public head: NodeItem
  public tail: NodeItem
  public length: number

  constructor(value: any) {
    this.head = { value, next: null }
    this.tail = this.head
    this.length = 1
  }

  public append(value: any): LinkedList {
    this.tail.next = { value, next: null }
    this.length++
    this.tail = this.tail.next as NodeItem
    return this
  }

  public prepend(value: any): LinkedList {
    const item = { value, next: this.head }
    this.head = item
    this.length++
    return this
  }

  public insert(index: number, value: any): LinkedList {
    if (index >= this.length) {
      return this.append(value)
    }
    if (index <= 0) {
      return this.prepend(value)
    }
    const leader = this.traverseToIndex(index - 1)
    const newNode = {
      value, next: leader.next
    }
    leader.next = newNode
    this.length++

    return this
  }

  public remove(index: number): LinkedList {
    if (index === 0) {
      this.head = this.head.next as NodeItem
    } else {
      const before = this.traverseToIndex(index - 1)
      const current = before.next as NodeItem
      before.next = current.next
      current.next = null
    }
    this.length--
    return this
  }

  private traverseToIndex(index: number): NodeItem {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next as NodeItem
      counter++
    }
    return currentNode
  }

  print(): void {
    const array = []
    let currentNode = this.head
    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next as NodeItem
    }
    console.log(array.join('->'))
  }

  // 翻转链表
  reverse() {
    if (!this.head.next) return this.head
    let first = this.head
    this.tail = this.head
    let second = first.next
    while (second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
  }
}

export default LinkedList
