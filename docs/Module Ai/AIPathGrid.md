# AIPathGrid

A general grid representation.
- parent of: AIPathGrid2D, AIPathGrid3D
## Constructors
- **new AIPathGrid**(size: T, grid: number[]): AIPathGrid   
   - **size**: The grid size.
   - **grid**: The grid data.
## Methods
- **getDirections**(a: T, b: T)   
Return all ortho vectors between two positions fitting from nearest to farest the direction.
   - **a**: The cell position A.
   - **b**: The cell position B.

- **getValue**(pos: T): number   
Return value of cell.
   - **pos**: The cell position.

- **isInside**(pos: T): boolean   
Check if position is inside the grid.
   - **pos**: The cell position.

- **isSame**(a: T, b: T): boolean   
Check if position A and position B are same.
   - **a**: The cell position A.
   - **b**: The cell position B.

- **loadFromFile**(path: string): Promise   
Loads asynchronously path grid data from a json file.
   - **path**: The file path.
