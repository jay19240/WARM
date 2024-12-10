# Gfx2Manager

Singleton 2D graphics manager.
## Constructors
- **new Gfx2Manager**(): Gfx2Manager   
## Methods
- **beginDrawing**(): void   
Begin the draw phase. Prepares the canvas for drawing.
Warning: You need to call this method before any draw calls.

- **endDrawing**(): void   
End the draw phase.

- **findCanvasPosFromClientPos**(clientX: number, clientY: number): vec2   
Returns canvas-space position from the the client-space position.
   - **clientX**: The horizontal client coordinate.
   - **clientY**: The vertical client coordinate.

- **findWorldPosFromClientPos**(clientX: number, clientY: number): vec2   
Returns the world-space position from the client-space position.
   - **clientX**: The horizontal client coordinate.
   - **clientY**: The vertical client coordinate.

- **getBgColor**(): vec4   
Returns the background color.

- **getCameraPosition**(): vec2   
Returns the camera position.

- **getCameraPositionX**(): number   
Returns the X coordinate of the camera position.

- **getCameraPositionY**(): number   
Returns the Y coordinate of the camera position.

- **getCameraRotation**(): number   
Returns the camera rotation angle in radians.

- **getCameraScale**(): vec2   
Returns the camera scale.

- **getCameraScaleX**(): number   
Returns the camera scale factor on x-axis.

- **getCameraScaleY**(): number   
Returns the camera scale factor on y-axis.

- **getCameraTransform**(): mat3   
Returns the camera transformation matrix.

- **getContext**(): CanvasRenderingContext2D   
Returns the 2D rendering context of the canvas element.

- **getDefaultTexture**(): HTMLImageElement   
Returns a default HTMLImageElement.

- **getHeight**(): number   
Returns the resolution height of the canvas.

- **getWidth**(): number   
Returns the resolution width of the canvas.

- **hasFilter**(): boolean   
Checks if the canvas element has an active filter.

- **moveCamera**(x: number, y: number): void   
Move the camera.
   - **x**: The move in x-axis direction.
   - **y**: The move in y-axis direction.

- **setBgColor**(r: number, g: number, b: number, a: number): void   
Sets the background color using the provided RGBA values (0 - 255).
   - **r**: The red component.
   - **g**: The green component.
   - **b**: The blue component.
   - **a**: The alpha value.

- **setCameraPosition**(x: number, y: number): void   
Sets the camera position.
   - **x**: The x-coordinate.
   - **y**: The y-coordinate.

- **setCameraRotation**(cameraRotation: number): void   
Sets the rotation of the camera.
   - **cameraRotation**: The camera rotation angle in radians.

- **setCameraScale**(x: number, y: number): void   
Sets the camera scale.
   - **x**: The scale factor for the camera in the x-axis.
   - **y**: The scale factor for the camera in the y-axis.

- **setCameraTransform**(cameraTransform: mat3): void   
Set the camera transformation matrix (before position/rotation/scale).
   - **cameraTransform**: The transformation matrix.

- **setFilter**(filter: string): void   
Sets the css filter property of the canvas.
   - **filter**: The filter parameter is a string that represents the CSS filter property's value.
It can be used to apply various visual effects to an element, such as blur, brightness, contrast,
grayscale, etc.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
