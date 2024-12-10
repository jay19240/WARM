# Gfx2BoundingRect

A 2D bounding rectangle.
## Constructors
- **new Gfx2BoundingRect**(min: vec2, max: vec2): Gfx2BoundingRect   
   - **min**: The minimum point of the bounding rectangle.
   - **max**: The maximum point of the bounding rectangle.
## Methods
- **fromVertices**(vertices: number[]): void   
Takes a list of vertices and set the new minimum and maximum values.
   - **vertices**: The list of vertices. Each pair of numbers represents the x and y coordinates of a point.

- **getCenter**(): vec2   
Returns the center point of the rectangle.

- **getHeight**(): number   
Returns the height.

- **getPerimeter**(): number   
Returns the perimeter of the rectangle.

- **getRadius**(): number   
Returns the radius of a circumscribed circle to the rectangle.

- **getSize**(): vec2   
Returns the width and height of the rectangle.

- **getVolume**(): number   
Returns the volume of a the rectangle.

- **getWidth**(): number   
Returns the width.

- **intersectBoundingRect**(aabr: Gfx2BoundingRect): boolean   
Checks if two bounding rectangles intersect.
   - **aabr**: The second rectangle.

- **isPointInside**(x: number, y: number): boolean   
Checks if a given point is inside the rectangle.
   - **x**: The x-coordinate of the point.
   - **y**: The y-coordinate of the point.

- **merge**(rect: Gfx2BoundingRect): Gfx2BoundingRect   
Merge and returns the union of two rectangles.
   - **rect**: The second rectangle.

- **splitHorizontal**()   
Split the bounding box on y-axis and returns boxes for each side.

- **splitVertical**()   
Split the bounding box on x-axis and returns boxes for each side.

- **transform**(matrix: mat3): Gfx2BoundingRect   
Returns the transformed bounding rectangle.
   - **matrix**: Used to transform the points of the bounding rectangle.

- *static* **createFrom**(minx: number, miny: number, maxx: number, maxy: number): Gfx2BoundingRect   
Creates a new instance from min & max.
   - **minx**: The minimum x-coordinate of the bounding rectangle.
   - **miny**: The minimum y-coordinate of the bounding rectangle.
   - **maxx**: The maximum x-coordinate of the bounding rectangle.
   - **maxy**: The maximum y-coordinate of the bounding rectangle.

- *static* **createFromCenter**(x: number, y: number, w: number, h: number): Gfx2BoundingRect   
Creates a new instance from center coordinates & size.
   - **x**: The x-coordinate of the center of the bounding rectangle.
   - **y**: The y-coordinate of the center of the bounding rectangle.
   - **w**: The width of the bounding rectangle.
   - **h**: The height of the bounding rectangle.

- *static* **createFromCoord**(x: number, y: number, w: number, h: number): Gfx2BoundingRect   
Creates a new instance from coordinates & size.
   - **x**: The x-coordinate of the top-left corner of the bounding rectangle.
   - **y**: The y-coordinate of the top-left corner of the bounding rectangle.
   - **w**: The width of the bounding rectangle.
   - **h**: The height of the bounding rectangle.

- *static* **createFromVertices**(vertices: number[]): Gfx2BoundingRect   
Takes a list of vertices and set the new minimum and maximum values.
   - **vertices**: The list of vertices. Each pair of numbers represents the x and y coordinates of a point.
