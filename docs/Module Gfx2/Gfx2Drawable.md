# Gfx2Drawable

A 2D drawable object.
- parent of: Gfx2IsoTile, Gfx2IsoTileMapLayer, Gfx2Particles, Gfx2SpriteJAS, Gfx2SpriteJSS, Gfx2TileMapLayer
## Constructors
- **new Gfx2Drawable**(): Gfx2Drawable   
## Methods
- **clone**(drawable: Gfx2Drawable): Gfx2Drawable   
Clone the object.
   - **drawable**: The copy object.

- **draw**(): void   
The draw function.

- **getBoundingRect**(): Gfx2BoundingRect   
Returns the bounding rect.

- **getElevation**(): number   
Returns the elevation.
Only used for rendering 2D isometric tiles.

- **getOffset**(): vec2   
Returns the origin offset.

- **getOffsetX**(): number   
Returns the offset in x-axis direction.

- **getOffsetY**(): number   
Returns the offset in y-axis direction.

- **getOpacity**(): number   
Returns the opacity value.

- **getPosition**(): vec2   
Returns the position.

- **getPositionX**(): number   
Returns the x-coordinate of the position.

- **getPositionY**(): number   
Returns the y-coordinate of the position.

- **getPositionZ**(): number   
Returns the z-depth value.

- **getRotation**(): number   
Returns the rotation.

- **getScale**(): vec2   
Returns the scale as a 2D vector.

- **getScaleX**(): number   
Returns the scale factor on x-axis.

- **getScaleY**(): number   
Returns the scale factor on y-axis.

- **getWorldBoundingRect**(): Gfx2BoundingRect   
Returns the bounding rect in the world space coordinates.

- **isVisible**(): boolean   
Check if is visible or not.

- **paint**(): void   
Virtual method that is called during the draw phase (after transforms).

- **rotate**(a: number): void   
Add rotation value to current angle.
   - **a**: The rotation angle to add in radians.

- **setBoundingRect**(boundingRect: Gfx2BoundingRect): void   
Set the bounding rect.
   - **boundingRect**: The bounding rectangle.

- **setElevation**(elevation: number): void   
Set the elevation.
Only used for rendering 2D isometric tiles.
   - **elevation**: The elevation value.

- **setOffset**(x: number, y: number): void   
Set the origin offset value.
   - **x**: The x-offset.
   - **y**: The y-offset.

- **setOpacity**(opacity: number): void   
Sets the opacity.
   - **opacity**: The opacity value.

- **setPosition**(x: number, y: number): void   
Set the position with the given x and y coordinates.
   - **x**: The X coordinate of the position.
   - **y**: The Y coordinate of the position.

- **setPositionZ**(z: number): void   
Set the z-depth value.
   - **z**: The z-depth value.

- **setRotation**(rotation: number): void   
Sets the rotation angle (in radians).
   - **rotation**: The rotation angle in radians.

- **setScale**(x: number, y: number): void   
Sets the scale with the given x and y factors.
   - **x**: The x factor in the x-axis direction.
   - **y**: The y factor in the y-axis direction.

- **setVisible**(visible: boolean): void   
Set the visibility.
   - **visible**: The visibility.

- **translate**(x: number, y: number): void   
Translate the position.
   - **x**: The amount of translation in the x-axis direction.
   - **y**: The amount of translation in the y-axis direction.

- **update**(ts: number): void   
Virtual update function.
   - **ts**: The timestep.

- **zoom**(x: number, y: number): void   
Add scale values.
   - **x**: The x factor in the x-axis direction.
   - **y**: The y factor in the y-axis direction.
