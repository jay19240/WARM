# Gfx3Flare

A flare drawable object.
- inherit from: Gfx3Drawable
## Constructors
- **new Gfx3Flare**(): Gfx3Flare   
## Methods
- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **draw**(): void   
The draw function.

- **getColor**(): vec4   
Returns the color blend.

- **getGroup02**(): Gfx3StaticGroup   
Returns the bindgroup(2).

- **getOffset2D**(): vec2   
Returns the origin offset in pixel.

- **getPosition2D**(): vec2   
Returns the position in screen coordinates.
Top-left corner is at coordinates 0;0.

- **getRotation2D**(): number   
Returns the rotation angle (in radians).

- **getScale2D**(): vec2   
Returns the scale.

- **getSize2D**(): vec2   
Returns the size in pixels.

- **getTexture**(): Gfx3Texture   
Returns the texture.

- **setColor**(r: number, g: number, b: number, a: number): void   
Set the color blend (from 0 to 1).
   - **r**: The parameter "r" represents the red component.
   - **g**: The parameter "g" represents the green component.
   - **b**: The parameter "b" represents the blue component.
   - **a**: The parameter "a" represents the alpha value.

- **setOffset2D**(x: number, y: number): void   
Set the origin offset in pixel.
Default origin is top-left corner. Ex: An offset of 10;10 set the origin of the flare to 10;10.
   - **x**: The x offset.
   - **y**: The y offset.

- **setPosition2D**(x: number, y: number): void   
Set the position in screen coordinates.
Top-left corner is at coordinates 0;0.
   - **x**: The X coordinate of the position.
   - **y**: The Y coordinate of the position.

- **setRotation2D**(angle: number): void   
Set the rotation angle (in radians).
   - **angle**: The rotation angle in radians.

- **setScale2D**(x: number, y: number): void   
Set the scale with the given x and y factors.
   - **x**: The x factor in the x-axis direction.
   - **y**: The y factor in the y-axis direction.

- **setSize2D**(w: number, h: number): void   
Set the size in pixels.
   - **w**: The width of the flare.
   - **h**: The height of the flare.

- **setTexture**(texture: Gfx3Texture): void   
Set the texture.
   - **texture**: The texture of the flare.
