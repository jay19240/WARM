# Gfx3Camera

A 3D camera object.
- inherit from: Gfx3Transformable
- parent of: Gfx3CameraOrbit, Gfx3CameraWASD
## Constructors
- **new Gfx3Camera**(viewIndex: number): Gfx3Camera   
   - **viewIndex**: The view you want to bind the camera.
## Methods
- **changeView**(viewIndex: number): void   
Change the view attached to the camera.
   - **viewIndex**: The view specified by its index.

- **getAxies**()   
Returns the three local axes of the transformable.

- **getCameraMatrix**(): mat4   
Returns the camera matrix.

- **lookAt**(x: number, y: number, z: number, up: vec3): void   
Rotate to look at the specified coordinates.
   - **x**: The x-coordinate of the target position that the transformable should look at.
   - **y**: The y-coordinate of the target position that the transformable should look at.
   - **z**: The z-coordinate of the target position that the transformable should look at.
   - **up**

- **rotate**(x: number, y: number, z: number): void   
Add euler rotation in radians.
   - **x**: The rotation angle on x-axis in radians.
   - **y**: The rotation angle on y-axis in radians.
   - **z**: The rotation angle on z-axis in radians.

- **setPosition**(x: number, y: number, z: number): void   
Set the position with the given x, y and z coordinates.
   - **x**: The X coordinate of the position.
   - **y**: The Y coordinate of the position.
   - **z**: The Z coordinate of the position.

- **setQuaternion**(quaternion: Quaternion): void   
Set the Quaternion rotation.
   - **quaternion**: The quaternion.

- **setRotation**(x: number, y: number, z: number): void   
Set euler rotation in radians.
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
