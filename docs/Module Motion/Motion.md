# Motion

Is used to move along a serie of points.
It emit 'E_FINISHED'
## Constructors
- **new Motion**(points: vec3[], speed: number, looped: boolean): Motion   
   - **points**: The serie of points.
   - **speed**: The moving speed.
   - **looped**: Determine if path is closed, if closed then motion running in loop.
## Methods
- **getCurrentMove**(): vec3   
Returns the current move.

- **getCurrentMoveX**(): number   
Returns the current move x-coordinate.

- **getCurrentMoveY**(): number   
Returns the current move y-coordinate.

- **getCurrentMoveZ**(): number   
Returns the current move z-coordinate.

- **getCurrentPosition**(): vec3   
Returns the current position.

- **getCurrentPositionX**(): number   
Returns the current position x-coordinate.

- **getCurrentPositionY**(): number   
Returns the current position y-coordinate.

- **getCurrentPositionZ**(): number   
Returns the current position z-coordinate.

- **getCurrentRotationY**(): number   
Returns the current y-rotation in 3D space.

- **getCurrentRotationZ**(): number   
Returns the current y-rotation in 3D space.

- **getCurrentSegmentTime**(): number   
Returns the T value for the current segment (from 0 to 1).

- **getNextPoint**(): vec3   
Returns the current next point.

- **getNextPointIndex**(): number   
Returns the current next point index.

- **getPrevPoint**(): vec3   
Returns the current prev point.

- **getPrevPointIndex**(): number   
Returns the current previous point index.

- **isRunning**(): boolean   
Check if currently moving along the path.

- **loadFromData**(data: any): void   
Load from a data object.
   - **data**: The data object.

- **loadFromFile**(path: string): Promise   
Load asynchronously from a json file.
   - **path**: The file path.

- **run**(): void   
Start moving along the path.

- **stop**(): void   
Stop moving along the path.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
