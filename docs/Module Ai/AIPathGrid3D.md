# AIPathGrid3D

A 3D grid representation.
- inherit from: AIPathGrid
## Constructors
- **new AIPathGrid3D**(size: vec3, grid: number[]): AIPathGrid3D   
   - **size**: The grid size.
   - **grid**: The grid data.
## Methods
- **getDirections**(a: vec3, b: vec3)   
Return all ortho vectors between two positions fitting from nearest to farest the direction.
   - **a**: The cell position A.
   - **b**: The cell position B.

- **getValue**(pos: vec3): number   
Return value of cell.
   - **pos**: The cell position.

- **isInside**(pos: vec3): boolean   
Check if position is inside the grid.
   - **pos**: The cell position.

- **isSame**(a: vec3, b: vec3): boolean   
Check if position A and position B are same.
   - **a**: The cell position A.
   - **b**: The cell position B.
