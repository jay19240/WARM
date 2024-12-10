# Gfx3BoundingBox

A 3D bounding box.
## Constructors
- **new Gfx3BoundingBox**(min: vec3, max: vec3): Gfx3BoundingBox   
   - **min**: The minimum point of the bounding box.
   - **max**: The maximum point of the bounding box.
## Methods
- **fromVertices**(vertices, vertexStride: number): void   
Takes a list of vertices and set the new minimum and maximum values.
   - **vertices**: The list of vertices. Each triplets of numbers represents the x, y and z coordinates of a point.
   - **vertexStride**

- **getCenter**(): vec3   
Returns the center point of the box.

- **getPerimeter**(): number   
Returns the perimeter of the box.

- **getRadius**(): number   
Returns the radius of a circumscribed circle to the box.

- **getSize**(): vec3   
Returns the width, height and depth of the box.

- **getVolume**(): number   
Returns the volume of a the box.

- **intersectBoundingBox**(aabb: Gfx3BoundingBox): boolean   
Checks if two bounding boxes intersect.
   - **aabb**: The second box.

- **isPointInside**(x: number, y: number, z: number): boolean   
Checks if a given point is inside the box.
   - **x**: The x-coordinate of the point.
   - **y**: The y-coordinate of the point.
   - **z**: The z-coordinate of the point.

- **merge**(aabb: Gfx3BoundingBox): Gfx3BoundingBox   
Merge and returns the union of two boxes.
   - **aabb**: The second box.

- **reset**(): void   
Reset min & max values (set to 0).

- **setMax**(max: vec3): void   
Set the maximum value.
   - **max**: The max point of the box.

- **setMin**(min: vec3): void   
Set the minimum value.
   - **min**: The min point of the box.

- **splitDepth**()   
Split the bounding box on z-axis and returns boxes for each side.

- **splitHorizontal**()   
Split the bounding box on y-axis and returns boxes for each side.

- **splitVertical**()   
Split the bounding box on x-axis and returns boxes for each side.

- **transform**(matrix: mat4): Gfx3BoundingBox   
Returns the transformed bounding box.
   - **matrix**: Used to transform the points of the bounding box.

- *static* **createFromCenter**(x: number, y: number, z: number, w: number, h: number, d: number): Gfx3BoundingBox   
Creates a new instance from center and size.
   - **x**: The x-coordinate of the center of the bounding box.
   - **y**: The y-coordinate of the center of the bounding box.
   - **z**: The z-coordinate of the center of the bounding box.
   - **w**: The width of the bounding box.
   - **h**: The height of the bounding box.
   - **d**: The depth of the bounding box.

- *static* **createFromCoord**(x: number, y: number, z: number, w: number, h: number, d: number): Gfx3BoundingBox   
Creates a new instance from coordinates and size.
   - **x**: The x-coordinate of the bottom-left-front corner of the bounding box.
   - **y**: The y-coordinate of the bottom-left-front corner of the bounding box.
   - **z**: The z-coordinate of the bottom-left-front corner of the bounding box.
   - **w**: The width of the bounding box.
   - **h**: The height of the bounding box.
   - **d**: The depth of the bounding box.

- *static* **createFromVertices**(vertices, vertexStride: number): Gfx3BoundingBox   
Takes a list of vertices and set the new minimum and maximum values.
   - **vertices**: The list of vertices. Each triplets of numbers represents the x, y and z coordinates of a point.
   - **vertexStride**

- *static* **merge**(aabbs: Gfx3BoundingBox[]): Gfx3BoundingBox   
Merge and returns the union of some boxes.
   - **aabbs**: The list of boxes.
