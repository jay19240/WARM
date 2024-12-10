# Gfx2IsoTileMapLayer

A isometric tilemap layer drawable.
Note: You can draw the layer or get all tiles and draw them in Gfx2IsoDrawer.
It depends of your usage.
In both cases don't forget to call the update function to run animations.
- inherit from: Gfx2Drawable
## Constructors
- **new Gfx2IsoTileMapLayer**(): Gfx2IsoTileMapLayer   
## Methods
- **getColorDebug**(): string   
Returns the debug lines color.

- **getLineWidthDebug**(): number   
Returns the debug lines width.

- **getTiles**()   
Returns all tile drawables.

- **isShowDebug**(): boolean   
Check if debug display is enabled.

- **loadFromTileMap**(tilemap: Gfx2TileMap, layerIndex: number): void   
Load data from tilemap and layer index.
   - **tilemap**: The tilemap.
   - **layerIndex**: The index of the tilelayer.

- **paint**(): void   
The paint function.

- **placeTile**(tileId: number, row: number, col: number): void   
Place a tile at specific location.
   - **tileId**: The tile identifier.
   - **row**: The row index.
   - **col**: The col index.

- **removeTileAt**(row: number, col: number): void   
Remove a tile at specific location.
   - **row**: The row index.
   - **col**: The col index.

- **setColorDebug**(colorDebug: string): void   
Set the color of debug lines.
   - **colorDebug**: The color.

- **setLineWidthDebug**(lineWidthDebug: number): void   
Set the width of debug lines.
   - **lineWidthDebug**: The line width.

- **setShowDebug**(showDebug: boolean): void   
Set the show debug flag.
   - **showDebug**: The showDebug flag.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
