# Gfx2TreePartitionMethod

A 2D binary tree space partition method for quick search intersections.
## Constructors
- **new Gfx2TreePartitionMethod**(rect: Gfx2BoundingRect, axis): Gfx2TreePartitionMethod   
   - **rect**: The partition rectangle.
   - **axis**: The partition split axis.
## Methods
- **draw**(): void   

- **search**(node: TreePartitionNode, target: Gfx2BoundingRect, results: Gfx2BoundingRect[])   
Search and return all objects that intersect with the target.
   - **node**
   - **target**: The target object.
   - **results**: All matching objects.

- **split**(objects: Gfx2BoundingRect[]): SplitResult   
Splits objects into left and right based on a specified axis, finally it returns new partition methods for each side.
   - **objects**: A list of bounding rectangle.
