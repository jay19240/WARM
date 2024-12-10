# Gfx2SpriteJSS

A 2D static sprite (without animations).
- inherit from: Gfx2Drawable
## Constructors
- **new Gfx2SpriteJSS**(): Gfx2SpriteJSS   
## Methods
- **clone**(jss: Gfx2SpriteJSS): Gfx2SpriteJSS   
Clone the object.
   - **jss**: The copy object.

- **getFlip**()   
Returns two booleans, first is the x-axis flip flag, second is the y-axis flip flag.

- **getTexture**()   
Returns the sprite texture.

- **getTextureRect**(): vec4   
Returns the texture rectangle.

- **getTextureRectHeight**(): number   
Returns the texture rect height.

- **getTextureRectWidth**(): number   
Returns the texture rect width.

- **loadFromFile**(path: string): Promise   
Load asynchronously sprite data from a json file (jss).
   - **path**: The file path.

- **paint**(): void   
The paint function.

- **setFlipX**(x: boolean): void   
Set flipX.
   - **x**: The x-axis flip flag.

- **setFlipY**(y: boolean): void   
Set flipY.
   - **y**: The y-axis flip flag.

- **setOffsetNormalized**(offsetXFactor: number, offsetYFactor: number): void   
Set the normalized offset value.
   - **offsetXFactor**: The normalized x-coordinate offset value.
   - **offsetYFactor**: The normalized y-coordinate offset value.

- **setTexture**(texture): void   
Set the sprite texture.
   - **texture**: The sprite texture.

- **setTextureRect**(left: number, top: number, width: number, height: number): void   
Set the texture rectangle.
   - **left**: The x-coordinate of the top-left texture rectangle corner.
   - **top**: The y-coordinate of the top-left texture rectangle corner.
   - **width**: The width of the texture rectangle.
   - **height**: The height of the texture rectangle.
