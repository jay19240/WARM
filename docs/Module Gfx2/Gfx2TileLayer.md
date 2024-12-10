# Gfx2TileLayer

The tile layer.
## Constructors
- **new Gfx2TileLayer**(): Gfx2TileLayer   
## Methods
- **getColumns**(): number   
Returns the number of columns.

- **getFrameDuration**(): number   
Returns the frame duration for animated tiles.

- **getGrid**()   
Returns the map layer's grid.

- **getName**(): string   
Returns the name.

- **getOffsetX**(): number   
Returns the x-coordinates offset.

- **getOffsetY**(): number   
Returns the y-coordiantes offset.

- **getRows**(): number   
Returns the number of rows.

- **getTile**(col: number, row: number): number   
Returns the tile at a specific location.
   - **col**: The column index.
   - **row**: The row index.

- **isVisible**(): boolean   
Check if layer is visible or not.

- **loadFromData**(data: any): Promise   
Loads asynchronously tile layer from data object.
   - **data**: The data object.
