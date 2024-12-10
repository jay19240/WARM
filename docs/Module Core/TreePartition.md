# TreePartition

The root partition binary tree.
- parent of: Gfx2TreePartition, Gfx3TreePartition
## Constructors
- **new TreePartition**(maxChildren: number, maxDepth: number, method: ITreePartitionMethod): TreePartition   
   - **maxChildren**: The maximum number of children that a node in the tree can have. It determines the branching factor of the tree, i.e.
   - **maxDepth**: The maximum depth or level of the tree partition. It determines how deep the tree can be divided into smaller partitions.
   - **method**: Defines a method that is responsible for partitioning the tree nodes.
## Methods
- **addChild**(object: T): void   
Adds an object.
   - **object**: The object.

- **draw**(): void   

- **getMaxChildren**(): number   
Returns the maximum number of children per nodes.

- **getMaxDepth**(): number   
Returns the maximum depth of the partition tree.

- **search**(target: T, results: T[])   
Search and return all objects that intersect with the target.
   - **target**: The target object.
   - **results**: All matching objects.
