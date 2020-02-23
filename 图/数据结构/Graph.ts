// 图 无向无权重图
class Graph {
  public numberOfNodes = 0
  public adjacentList: { [key: string]: any } = {}

  // 添加顶点
  addVertex(node: string): Graph {
    this.adjacentList[node] = []
    this.numberOfNodes++
    return this
  }

  // 添加边
  addEdge(node1: string, node2: string): Graph {
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
    return this
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList)
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ''
      let vertext
      for (vertext of nodeConnections) {
        connections += vertext + ' '
      }
      console.log(node + '-->' + connections)
    }
  }
}

// const graph = new Graph()
// graph.addVertex('0')
// graph.addVertex('1')
// graph.addVertex('2')
// graph.addVertex('3')
// graph.addVertex('4')
// graph.addVertex('5')
// graph.addVertex('6')
// graph.addEdge('3', '1')
// graph.addEdge('3', '4')
// graph.addEdge('4', '2')
// graph.addEdge('4', '5')
// graph.addEdge('1', '2')
// graph.addEdge('1', '0')
// graph.addEdge('0', '2')
// graph.addEdge('6', '5')

// graph.showConnections()

export default Graph
