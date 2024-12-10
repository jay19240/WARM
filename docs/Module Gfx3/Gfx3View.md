# Gfx3View

A 3D view. Used to manipulate camera, viewport, projection mode, background color and more.
## Constructors
- **new Gfx3View**(): Gfx3View   
## Methods
- **getBgColor**(): vec4   
Returns the background color.

- **getCameraMatrix**(): mat4   
Returns the camera matrix.

- **getCameraPosition**(): vec3   
Returns the position of the camera.

- **getCameraViewMatrix**(): mat4   
Returns the camera view matrix (nothing else than an inverted camera matrix).

- **getClientScreenPosition**(x: number, y: number, z: number): vec2   
Returns the client screen position of a 3D point given its world coordinates.
   - **x**: The x world coordinate.
   - **y**: The y world coordinate.
   - **z**: The z world coordinate.

- **getClipMatrix**(): mat4   
Returns the clip matrix.

- **getClipOffset**(): vec2   
Returns the clip offset.

- **getClipOffsetX**(): number   
Returns the x-coordinate of the clip offset.

- **getClipOffsetY**(): number   
Returns the y-coordinate of the clip offset.

- **getOrthographicDepth**(): number   
Returns the orthographic depth.

- **getOrthographicSize**(): number   
Returns the orthographic size.

- **getPerspectiveFar**(): number   
Returns the far limit.

- **getPerspectiveFovy**(): number   
Returns the fovy angle (perspective eye-angle).

- **getPerspectiveNear**(): number   
Returns the near limit.

- **getProjectionClipMatrix**(): mat4   
Returns the result of multiplying the clip matrix and the projection matrix.

- **getProjectionMatrix**(): mat4   
Returns a projection matrix.

- **getProjectionMode**(): ProjectionMode   
Returns the projection mode.

- **getScreenNormalizedPosition**(x: number, y: number, z: number): vec2   
The normalized screen position of a 3D point given its world coordinates.
   - **x**: The x world coordinate.
   - **y**: The y world coordinate.
   - **z**: The z world coordinate.

- **getScreenSize**(): vec2   
Returns the screen size.

- **getViewProjectionClipMatrix**(): mat4   
Returns the result of multiplying the clip matrix, projection matrix, and camera view matrix together.

- **getViewport**(): Gfx3Viewport   
Returns the viewport.

- **getViewportClientSize**(): vec2   
Returns the size of the viewport in client coordinates space.

- **getViewportSize**(): vec2   
Returns the size of the viewport in pixels.

- **setBgColor**(r: number, g: number, b: number, a: number): void   
Set the background color (from 0 to 1).
   - **r**: The parameter "r" represents the red component.
   - **g**: The parameter "g" represents the green component.
   - **b**: The parameter "b" represents the blue component.
   - **a**: The parameter "a" represents the alpha value.

- **setCameraMatrix**(cameraMatrix: mat4): void   
Set the camera matrix.
   - **cameraMatrix**: The camera transformation matrix.

- **setClipOffset**(x: number, y: number): void   
Set the clip offset with the given x and y coordinates.
   - **x**: The X coordinate of the clip offset.
   - **y**: The Y coordinate of the clip offset.

- **setOrthographicDepth**(orthographicDepth: number): void   
Set orthographic depth.
   - **orthographicDepth**: The depth of the orthographic view.

- **setOrthographicSize**(orthographicSize: number): void   
Set orthographic size.
   - **orthographicSize**: Determines how much of the scene is visible within the camera's view frustum.

- **setPerspectiveFar**(perspectiveFar: number): void   
Set the far limit.
   - **perspectiveFar**: The maximum distance from the camera at which objects will be rendered.

- **setPerspectiveFovy**(perspectiveFovy: number): void   
Set the fovy angle.
   - **perspectiveFovy**: The fovy angle.

- **setPerspectiveNear**(perspectiveNear: number): void   
Set the near limit.
   - **perspectiveNear**: The distance to the near clipping plane of a perspective projection.

- **setProjectionMode**(projectionMode: ProjectionMode): void   
Set the projection mode.
   - **projectionMode**: The projection mode.

- **setScreenSize**(width: number, height: number): void   
Set the screen width and height (internal use).
Warning: Don't change the screen size here please, use CoreManager instead.
It's method is automatically updated by Gfx3Manager::$handleWindowResize.
   - **width**: The width of the screen size.
   - **height**: The height of the screen size.

- **setViewport**(viewport: Gfx3Viewport): void   
Set the viewport.
   - **viewport**: The viewport.
