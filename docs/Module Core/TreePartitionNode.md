# TreePartitionNode

The node in a binary tree partition data structure.
## Constructors
- **new TreePartitionNode**(tree: TreePartition, depth: number, method: ITreePartitionMethod): TreePartitionNode   
   - **tree**: The root partition binary tree.
   - **depth**: The depth of that node.
   - **method**: Defines a method that is responsible for partitioning the tree nodes.
## Methods
- **$createSubNodes**(): void   

- **addChild**(object: T): void   
Adds an object.
   - **object**: The object.

- **draw**(): void   

- **getChildren**()   
Returns children.

- **getDepth**(): number   
Returns the depth value.

- **getLeft**()   
Returns the left node or null.

- **getMethod**(): ITreePartitionMethod   
Returns the partition method object.

- **getRight**()   
Returns the right node or null.

- **reset**(): void   
Removes all nodes.

- **search**(target: T, results: T[])   
Search and return all objects that intersect with the target.
   - **target**: The target object.
   - **results**: All matching objects.

- **setDepth**(depth: number): void   
Set depth value.
   - **depth**: The depth value.
