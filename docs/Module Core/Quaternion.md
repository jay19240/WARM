# Quaternion

A quaternion.
This class is a fork from Quaternion.js.
Thanks to
## Constructors
- **new Quaternion**(w: number, x: number, y: number, z: number): Quaternion   
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag
## Methods
- **add**(w: number, x: number, y: number, z: number): Quaternion   
Adds two quaternions Q1 and Q2
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- **clone**(): Quaternion   
Clones the actual object

- **conjugate**(): Quaternion   
Calculates the conjugate of a quaternion

- **div**(w: number, x: number, y: number, z: number): Quaternion   
Multiplies a quaternion with the inverse of a second quaternion
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- **dot**(w: number, x: number, y: number, z: number): number   
Calculates the dot product of two quaternions
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- **equals**(w: number, x: number, y: number, z: number): boolean   
Checks if two quats are the same
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- **exp**(): Quaternion   
Calculates the natural exponentiation of the quaternion

- **imag**(): vec3   
Returns the imaginary part of the quaternion as a 3D vector / array

- **inverse**(): Quaternion   
Calculates the inverse of a quat for non-normalized quats such that
Q^-1 * Q = 1 and Q * Q^-1 = 1

- **isFinite**(): boolean   
Checks if all parts of a quaternion are finite

- **isNaN**(): boolean   
Checks if any of the parts of the quaternion is not a number

- **log**(): Quaternion   
Calculates the natural logarithm of the quaternion

- **mul**(w: number, x: number, y: number, z: number): Quaternion   
Calculates the Hamilton product of two quaternions
Leaving out the imaginary part results in just scaling the quat
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- **neg**(): Quaternion   
Calculates the additive inverse, or simply it negates the quaternion

- **norm**(): number   
Calculates the length/modulus/magnitude or the norm of a quaternion

- **normSq**(): number   
Calculates the squared length/modulus/magnitude or the norm of a quaternion

- **normalize**(): Quaternion   
Normalizes the quaternion to have |Q| = 1 as long as the norm is not zero
Alternative names are the signum, unit or versor

- **real**(): number   
Returns the real part of the quaternion

- **rotateVector**(v: vec3): vec3   
Rotates a vector according to the current quaternion, assumes |q|=1
   - **v**: The vector to be rotated

- **rotateX**(rad: number): Quaternion   
Rotates a quaternion by the given angle about the X axis
   - **rad**: angle (in radians) to rotate

- **rotateY**(rad: number): Quaternion   
Rotates a quaternion by the given angle about the Y axis
   - **rad**: angle (in radians) to rotate

- **rotateZ**(rad: number): Quaternion   
Rotates a quaternion by the given angle about the Z axis
   - **rad**: angle (in radians) to rotate

- **scale**(s: number): Quaternion   
Scales a quaternion by a scalar, faster than using multiplication
   - **s**: scaling factor

- **slerp**(w: number, x: number, y: number, z: number): Function   
Gets a function to spherically interpolate between two quaternions
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- **sub**(w: number, x: number, y: number, z: number): Quaternion   
Subtracts a quaternions Q2 from Q1
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- **toAxisAngle**()   
Calculates the axis and angle representation of the quaternion

- **toCSSTransform**(): string   
Determines the homogeneous rotation matrix string used for CSS 3D transforms

- **toMatrix**(): mat3   
Calculates the 3x3 rotation matrix for the current quat

- **toMatrix4**(): mat4   
Calculates the homogeneous 4x4 rotation matrix for the current quat

- **toVector**(): vec4   
Gets the actual quaternion as a 4D vector / array

- *static* **createFromAxisAngle**(axis: vec3, angle: number): Quaternion   
Creates quaternion by a rotation given as axis-angle orientation
   - **axis**: The axis around which to rotate
   - **angle**: The angle in radians

- *static* **createFromBetweenVectors**(u: vec3, v: vec3): Quaternion   
Calculates the quaternion to rotate vector u onto vector v
   - **u**: The first vector.
   - **v**: The second vector.

- *static* **createFromEuler**(φ: number, θ: number, ψ: number, order: string): Quaternion   
Creates a quaternion by a rotation given by Euler angles (multiplication order from right to left)
   - **φ**: First angle
   - **θ**: Second angle
   - **ψ**: Third angle
   - **order**: Axis order (Tait Bryan)

- *static* **createFromLookAt**(lookAt: vec3, up: vec3): Quaternion   
Creates a quaternion from a lookat direction
   - **lookAt**: The lookAt direction vector.
   - **up**: The up vector.

- *static* **createFromMatrix**(matrix: mat3): Quaternion   
Creates a quaternion by a rotation matrix
   - **matrix**: The matrix.

- *static* **createNormalized**(w: number, x: number, y: number, z: number): Quaternion   
Creates a new normalized Quaternion object
   - **w**: real
   - **x**: imag
   - **y**: imag
   - **z**: imag

- *static* **createRandom**(): Quaternion   
Gets a spherical random number
