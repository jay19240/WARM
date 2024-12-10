# AIPathGraphSolver

Implements the A* algorithm to find the shortest path between two nodes in a graph.
## Constructors
- **new AIPathGraphSolver**(): AIPathGraphSolver   
## Methods
- **heuristic**(graph: AIPathGraph, nodeA: AIPathNode, nodeB: AIPathNode): number   
Calculates the distance between two nodes in a graph.
   - **graph**: The path graph.
   - **nodeA**: The node A.
   - **nodeB**: The node B.

- **solve**(graph: AIPathGraph, startNode: AIPathNode, endNode: AIPathNode)   
Find the shortest path between a start node and an end node in a given graph and returns the path.
   - **graph**: The path graph.
   - **startNode**: The starting node of the path.
   - **endNode**: The destination node.
