// Graphs

class Graph {
  constructor(){
    this.adjacencyList = [];
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  } 

  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1,v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!==v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!==v1);
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
    this.adjacencyList[vertex].forEach(v => {
      const adjVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(adjVertex,vertex)
    })
  }
  delete this.adjacencyList[vertex]
}
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('LosAngeles');
g.addVertex('HongKong');
g.addEdge("Dallas","Tokyo");
g.addEdge("Dallas","Aspen");
g.addEdge("Tokyo","Aspen");
g.addEdge("LosAngeles","Aspen");
g.addEdge("Tokyo","HongKong");
g.addEdge("LosAngeles","HongKong");
g.addEdge("Dallas","HongKong");
g.removeEdge("Aspen","Dallas")
g.removeVertex('Tokyo');
console.log(g)
