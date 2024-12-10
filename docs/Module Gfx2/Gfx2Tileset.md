# Gfx2Tileset

The tileset.
## Constructors
- **new Gfx2Tileset**(): Gfx2Tileset   
## Methods
- **getAnimation**(tileId: number)   
Returns a tile animation as a list of tile index.
   - **tileId**: The tile index.

- **getColumns**(): number   
Returns the number of columns.

- **getTexture**()   
Returns the texture's tileset.

- **getTileHeight**(): number   
Returns the height of a tile.

- **getTilePositionX**(tileId: number): number   
Returns the pixel x-coordinate of a tile.
   - **tileId**: The tile index (start at 1).

- **getTilePositionY**(tileId: number): number   
Returns the pixel y-coordinate of a tile.
   - **tileId**: The tile index (start at 1).

- **getTileWidth**(): number   
Returns the width of a tile.

- **loadFromData**(data: any): Promise   
Load asynchronously tileset from data object.
   - **data**: The data object.
