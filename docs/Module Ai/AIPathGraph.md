# AIPathGraph

A Generic abstract path graph.
- parent of: AIPathGraph2D, AIPathGraph3D
## Constructors
- **new AIPathGraph**(nodes: Map): AIPathGraph   
   - **nodes**: The graph data.
## Methods
- **addNode**(nid: string, node: AIPathNode, biRelations: boolean): AIPathNode   
Add a node.
   - **nid**: The unique identifier of the node.
   - **node**: The node.
   - **biRelations**: Determines whether bidirectional relations should be established between the newly added node and its children.

- **findNode**(predicateFn: Function)   
Find the first node matching with the predicate function.
   - **predicateFn**: The predicate function.

- **findNodes**(predicateFn: Function)   
Find all nodes matching with the predicate function.
   - **predicateFn**: The predicate function.

- **getDistance**(a: AIPathNode, b: AIPathNode): number   
Return the distance between two nodes.
   - **a**
   - **b**

- **getNode**(nid: string): AIPathNode   
Return the node.
   - **nid**: The unique identifier.

- **loadFromFile**(path: string): Promise   
Asynchronously loads graph data from a json file.
   - **path**: The file path.

- **removeNode**(nid: string): void   
Remove the node.
   - **nid**: The unique identifier.

- **removeNodeRelation**(nid: string, cnid: string, biRelations: boolean): void   
Remove node relationship.
   - **nid**: The node from which you want to remove a relation.
   - **cnid**: The child to remove.
   - **biRelations**: Determines whether bidirectional relations should be removed.

- **reset**(): void   
Reset weight values of nodes.

- **setNodeProperties**(nid: string, properties: Partial): void   
Set node properties.
   - **nid**: The unique identifier.
   - **properties**: The properties dataset.
