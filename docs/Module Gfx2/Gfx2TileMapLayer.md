# Gfx2TileMapLayer

A tilemap layer drawable.
- inherit from: Gfx2Drawable
## Constructors
- **new Gfx2TileMapLayer**(): Gfx2TileMapLayer   
## Methods
- **loadFromTileMap**(tilemap: Gfx2TileMap, layerIndex: number): void   
Load data from tilemap and layer index.
   - **tilemap**: The tilemap.
   - **layerIndex**: The index of the tilelayer.

- **paint**(): void   
The paint function.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
