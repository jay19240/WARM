# AIPathGrid2D

A 2D grid representation.
- inherit from: AIPathGrid
## Constructors
- **new AIPathGrid2D**(size: vec2, grid: number[]): AIPathGrid2D   
   - **size**: The grid size.
   - **grid**: The grid data.
## Methods
- **getDirections**(a: vec2, b: vec2)   
Return all ortho vectors between two positions fitting from nearest to farest the direction.
   - **a**: The cell position A.
   - **b**: The cell position B.

- **getValue**(pos: vec2): number   
Return value of cell.
   - **pos**: The cell position.

- **isInside**(pos: vec2): boolean   
Check if position is inside the grid.
   - **pos**: The cell position.

- **isSame**(a: vec2, b: vec2): boolean   
Check if position A and position B are same.
   - **a**: The cell position A.
   - **b**: The cell position B.
