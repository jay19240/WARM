# Gfx2TileMap

The tilemap.
## Constructors
- **new Gfx2TileMap**(): Gfx2TileMap   
## Methods
- **findTileLayer**(name: string)   
Searches for a tile layer with a given name and returns it if found, otherwise it returns undefined.
   - **name**: The name of the tile layer.

- **getColumns**(): number   
Returns the number of columns.

- **getHeight**(): number   
Returns the map height in pixels.

- **getLocationCol**(x: number): number   
Returns the column index of a given x-coordinate.
   - **x**: The x-coordinate.

- **getLocationFromIso**(x: number, y: number): vec2   
Returns the corresponding row and column location.
   - **x**: The x-coordinate.
   - **y**: The y-coordinate.

- **getLocationRow**(y: number): number   
Returns the row index of a given y-coordinate.
   - **y**: The y-coordinate.

- **getPositionIso**(row: number, col: number): vec2   
Returns a pixel position from row and column indices in an isometric projection.
   - **row**: The row index.
   - **col**: The column index.

- **getPositionX**(col: number): number   
Returns the x-coordinate in pixel of a column on a grid. Origin is given at the top-left corner.
   - **col**: The column index.

- **getPositionY**(row: number): number   
Returns the y-coordinate in pixel of a row on a grid. Origin is given at the top-left corner.
   - **row**: The row index.

- **getRows**(): number   
Returns the number of rows.

- **getTileHeight**(): number   
Returns the height of a tile.

- **getTileLayer**(index: number): Gfx2TileLayer   
Returns the tile layer at the specified index.
   - **index**: The index.

- **getTileLayers**()   
Returns all tile layers.

- **getTileWidth**(): number   
Returns the width of a tile.

- **getTileset**(): Gfx2Tileset   
Returns the tileset.

- **getWidth**(): number   
Returns the width map in pixels.

- **loadFromFile**(path: string): Promise   
Load asynchronously map data from a json file.
   - **path**: The file path.
