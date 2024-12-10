# Gfx3Transformable

A transformable object with position, rotation, scale and more.
- parent of: Gfx3Drawable, Gfx3Camera
## Constructors
- **new Gfx3Transformable**(): Gfx3Transformable   
## Methods
- **getAxies**()   
Returns the three local axes of the transformable.

- **getPosition**(): vec3   
Returns the position.

- **getPositionX**(): number   
Returns the x-coordinate of the position.

- **getPositionY**(): number   
Returns the y-coordinate of the position.

- **getPositionZ**(): number   
Returns the z-coordinate of the position.

- **getQuaternion**(): Quaternion   
Returns the Quaternion rotation.

- **getRotation**(): vec3   
Returns the euler rotation in radians.

- **getRotationX**(): number   
Returns the euler rotation on x-axis in radians.

- **getRotationY**(): number   
Returns the euler rotation on y-axis in radians.

- **getRotationZ**(): number   
Returns the euler rotation on z-axis in radians.

- **getScale**(): vec3   
Returns the scale.

- **getScaleX**(): number   
Returns the scale factor on x-axis.

- **getScaleY**(): number   
Returns the scale factor on y-axis.

- **getScaleZ**(): number   
Returns the scale factor on z-axis.

- **getTransformMatrix**(): mat4   
Returns the transformation matrix from position, rotation, scale and quaternion values.

- **lookAt**(x: number, y: number, z: number, up: vec3): void   
Rotate to look at the specified coordinates.
Note: Avoid euler rotation and quaternion rotation.
   - **x**: The x-coordinate of the target position that the transformable should look at.
   - **y**: The y-coordinate of the target position that the transformable should look at.
   - **z**: The z-coordinate of the target position that the transformable should look at.
   - **up**

- **rotate**(x: number, y: number, z: number): void   
Add euler rotation values in radians.
   - **x**: The rotation angle on x-axis in radians.
   - **y**: The rotation angle on y-axis in radians.
   - **z**: The rotation angle on z-axis in radians.

- **setPosition**(x: number, y: number, z: number): void   
Set the position with the given x, y and z coordinates.
   - **x**: The X coordinate of the position.
   - **y**: The Y coordinate of the position.
   - **z**: The Z coordinate of the position.

- **setQuaternion**(quaternion: Quaternion): void   
Sets the Quaternion rotation.
   - **quaternion**: The quaternion.

- **setRotation**(x: number, y: number, z: number): void   
Set euler rotation angles in radians.
   - **x**: The rotation angle on x-axis in radians.
   - **y**: The rotation angle on y-axis in radians.
   - **z**: The rotation angle on z-axis in radians.

- **setScale**(x: number, y: number, z: number): void   
Set the scale with the given x, y and z factors.
   - **x**: The x factor in the x-axis direction.
   - **y**: The y factor in the y-axis direction.
   - **z**: The z factor in the z-axis direction.

- **translate**(x: number, y: number, z: number): void   
Translate the position.
   - **x**: The amount of translation in the x-axis direction.
   - **y**: The amount of translation in the y-axis direction.
   - **z**: The amount of translation in the z-axis direction.

- **zoom**(x: number, y: number, z: number): void   
Add scale values.
   - **x**: The x factor in the x-axis direction.
   - **y**: The y factor in the y-axis direction.
   - **z**: The z factor in the z-axis direction.
