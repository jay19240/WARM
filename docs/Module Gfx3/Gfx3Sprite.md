# Gfx3Sprite

A 3D base sprite object.
- inherit from: Gfx3Drawable
- parent of: Gfx3SpriteJAS, Gfx3SpriteJSS
## Constructors
- **new Gfx3Sprite**(): Gfx3Sprite   
## Methods
- **clone**(sprite: Gfx3Sprite, transformMatrix: mat4): Gfx3Sprite   
Clone the object.
   - **sprite**: The copy object.
   - **transformMatrix**: The transformation matrix.

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **draw**(): void   
The draw function.

- **getBillboardMode**(): boolean   
Returns the billboard mode.

- **getFlip**()   
Returns two booleans, first is the x-axis flip flag, second is the y-axis flip flag.

- **getGroup01**(): Gfx3StaticGroup   
Returns the bindgroup(1).

- **getOffset**(): vec2   
Returns the origin offset.

- **getOffsetX**(): number   
Returns the offset in x-axis direction.

- **getOffsetY**(): number   
Returns the offset in y-axis direction.

- **getPixelsPerUnit**(): number   
Returns the pixels per unit value.

- **getTexture**(): Gfx3Texture   
Returns the sprite texture.

- **getTransformMatrix**(): mat4   
Returns the transformation matrix.

- **setBillboardMode**(billboardMode: boolean): void   
Set the billboard mode.
   - **billboardMode**: Determines whether the object should be
displayed as a billboard, meaning it always faces the camera regardless of its orientation.

- **setFlipX**(x: boolean): void   
Set flipX.
   - **x**: The x-axis flip flag.

- **setFlipY**(y: boolean): void   
Set flipY.
   - **y**: The y-axis flip flag.

- **setOffset**(offsetX: number, offsetY: number): void   
Set the origin offset value.
   - **offsetX**: The x-offset.
   - **offsetY**: The y-offset.

- **setPixelsPerUnit**(pixelsPerUnit: number): void   
Set the number of pixels per unit.
   - **pixelsPerUnit**: Determine the scale or resolution at which the sprite is displayed.

- **setTexture**(texture: Gfx3Texture): void   
Set the sprite texture.
   - **texture**: The sprite texture.
