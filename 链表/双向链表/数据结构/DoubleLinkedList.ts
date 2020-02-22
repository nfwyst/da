interface NodeItem {
  value: any,
  next: NodeItem | null,
  prev: NodeItem | null
}

class DoubleLinkedList {
  public head: NodeItem
  public tail: NodeItem
  public length: number

  constructor(value: any) {
    this.head = { value, next: null, prev: null }
    this.tail = this.head
    this.length = 1
  }

  public append(value: any): DoubleLinkedList {
    this.tail.next = { value, next: null, prev: this.tail }
    this.length++
    this.tail = this.tail.next as NodeItem
    return this
  }

  public prepend(value: any): DoubleLinkedList {
    const item = { value, next: this.head, prev: null }
    this.head.prev = item
    this.head = item
    this.length++
    return this
  }

  public insert(index: number, value: any): DoubleLinkedList {
    if (index >= this.length) {
      return this.append(value)
    }
    if (index <= 0) {
      return this.prepend(value)
    }
    const leader = this.traverseToIndex(index - 1)
    const newNode = {
      value, next: leader.next, prev: leader
    }
    leader.next = newNode
    if (newNode.next) newNode.next.prev = newNode
    this.length++

    return this
  }

  public remove(index: number): DoubleLinkedList {
    if (index === 0) {
      this.head = this.head.next as NodeItem
      if (this.head.prev) this.head.prev.next = null
      this.head.prev = null
    } else {
      const before = this.traverseToIndex(index - 1)
      const current = before.next as NodeItem
      before.next = current.next
      if (current.next) current.next.prev = before
      current.next = null
      current.prev = null
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
}

export default DoubleLinkedList
