class HashTable {
  public data: any[]

  constructor(size: number) {
    this.data = new Array(size);
  }

  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  public set(key: string, value: any) {
    const address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }

  public get(key: string): any {
    const address = this._hash(key)
    const item = this.data[address].find(([k]: [string]) => key === k)
    return item ? item[1] : item
  }

  public keys(): string[] {
    const keysArray: string[] = []
    this.data.forEach(item => {
      if (!item) return
      item.forEach(([k]: [string]) => keysArray.push(k))
    })
    return keysArray
  }
}

export default HashTable
