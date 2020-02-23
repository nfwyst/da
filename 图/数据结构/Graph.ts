// 图 无向无权重图
class Graph {
  public numberOfNodes = 0
  public adjacentList: { [key: string]: any } = {}

  // 添加顶点
  // TODO
  addVertex(node) {

  }

  // 添加边
  // TODO
  addEdge(node1, node2) {

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

const graph = new Graph()
graph.addVertex('0')
graph.addVertex('1')
graph.addVertex('2')
graph.addVertex('3')
graph.addVertex('4')
graph.addVertex('5')
graph.addVertex('6')
graph.addEdge('3', '1')
graph.addEdge('3', '4')
graph.addEdge('4', '2')
graph.addEdge('4', '5')
graph.addEdge('1', '2')
graph.addEdge('1', '0')
graph.addEdge('0', '2')
graph.addEdge('6', '5')

graph.showConnections()
