# Gfx3TreePartitionMethod

A 3D binary tree partition method for quick search intersections.
## Constructors
- **new Gfx3TreePartitionMethod**(box: Gfx3BoundingBox, axis): Gfx3TreePartitionMethod   
   - **box**: The position and size of the partition box.
   - **axis**: The split axis of the partition.
## Methods
- **draw**(): void   
The draw function.

- **search**(node: TreePartitionNode, target: Gfx3BoundingBox, results: Gfx3BoundingBox[])   
Search and return all objects that intersect with the target.
   - **node**
   - **target**: The target object.
   - **results**: All matching objects.

- **split**(objects: Gfx3BoundingBox[]): SplitResult   
Splits objects into left and right based on a specified axis, finally it returns new partition methods for each side.
   - **objects**: A list of bounding box.
