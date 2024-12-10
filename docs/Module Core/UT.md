# UT

## Constructors
- **new UT**(): UT   
## Methods
- *static* **CLAMP**(value: number, min: number, max: number): number   
   - **value**: The value to clamp.
   - **min**: The min.
   - **max**: The max.

- *static* **COLLIDE_BOX_TO_BOX**(min1: vec3, max1: vec3, min2: vec3, max2: vec3): boolean   
   - **min1**: The min of box 1.
   - **max1**: The max of box 1.
   - **min2**: The min of box 2.
   - **max2**: The max of box 2.

- *static* **COLLIDE_CIRCLE_TO_CIRCLE**(c1: vec2, r1: number, c2: vec2, r2: number, outVelocity: vec2): boolean   
   - **c1**: center of circle 1.
   - **r1**: radius of circle 1.
   - **c2**: center of circle 2.
   - **r2**: radius of circle 2.
   - **outVelocity**: The out elastic collision velocity.

- *static* **COLLIDE_CYLINDER_TO_CYLINDER**(c1: vec3, r1: number, h1: number, c2: vec3, r2: number, h2: number, outVelocity: vec2): boolean   
   - **c1**: The center of cylinder 1.
   - **r1**: The radius of cylinder 1.
   - **h1**: The height of cylinder 1.
   - **c2**: The center of cylinder 2.
   - **r2**: The radius of cylinder 2.
   - **h2**: The height of cylinder 2.
   - **outVelocity**: The out elastic collision velocity.

- *static* **COLLIDE_LINE_TO_LINE**(p1: vec2, q1: vec2, p2: vec2, q2: vec2): boolean   
   - **p1**: The start line 1.
   - **q1**: The end line 1.
   - **p2**: The start line 2.
   - **q2**: The end line 2.

- *static* **COLLIDE_POINT_TO_BOX**(p: vec3, min: vec3, max: vec3): boolean   
   - **p**: The point.
   - **min**: The min point of box.
   - **max**: The max point of box.

- *static* **COLLIDE_POINT_TO_RECT**(p: vec2, min: vec2, max: vec2): boolean   
   - **p**: The point.
   - **min**: The min of rect.
   - **max**: The max of rect.

- *static* **COLLIDE_RECT_TO_RECT**(min1: vec2, max1: vec2, min2: vec2, max2: vec2): boolean   
   - **min1**: The min rect 1.
   - **max1**: The max rect 1.
   - **min2**: The min rect 2.
   - **max2**: The max rect 2.

- *static* **DEG_TO_RAD**(deg: number): number   
   - **deg**: Angle in degrees.

- *static* **EASE_IN_OUT_QUAD**(t: number, b: number, e: number, d: number): number   
   - **t**: The time.
   - **b**: The begin.
   - **e**: The end.
   - **d**: The divide.

- *static* **EASE_IN_QUAD**(t: number, b: number, e: number, d: number): number   
   - **t**: The time.
   - **b**: The begin.
   - **e**: The end.
   - **d**: The divide.

- *static* **EASE_OUT_QUAD**(t: number, b: number, e: number, d: number): number   
   - **t**: The time.
   - **b**: The begin.
   - **e**: The end.
   - **d**: The divide.

- *static* **GET_RANDOM_FLOAT**(min: number, max: number): number   
   - **min**: The min.
   - **max**: The max.

- *static* **GET_RANDOM_INT**(min: number, max: number): number   
   - **min**: The min.
   - **max**: The max.

- *static* **LERP**(a: number, b: number, t: number): number   
   - **a**: The begin.
   - **b**: The end.
   - **t**: The time.

- *static* **LINEAR**(t: number, b: number, e: number, d: number): number   
   - **t**: The time.
   - **b**: The begin.
   - **e**: The end.
   - **d**: The divide.

- *static* **LINEAR_VEC2**(t: number, b: vec2, e: vec2, d: number): vec2   
   - **t**: The time.
   - **b**: The begin vector.
   - **e**: The end vector.
   - **d**: The divide.

- *static* **LINEAR_VEC3**(t: number, b: vec3, e: vec3, d: number): vec3   
   - **t**: The time.
   - **b**: The begin.
   - **e**: The end.
   - **d**: The divide.

- *static* **MAT3_COPY**(src: mat3, out: mat3): mat3   
   - **src**: The source matrix.
   - **out**: The destination matrix.

- *static* **MAT3_CREATE**(): Float32Array   

- *static* **MAT3_IDENTITY**(out: mat3): mat3   
   - **out**: The identity matrix.

- *static* **MAT3_INVERT**(a: mat3, out: mat3): mat3   
   - **a**: The matrix.
   - **out**: The inverted matrix.

- *static* **MAT3_MULTIPLY**(a: mat3, b: mat3, out: mat3): mat3   
   - **a**: The first matrix.
   - **b**: The second matrix.
   - **out**: The result matrix.

- *static* **MAT3_MULTIPLY_BY_VEC3**(a: mat3, v: vec3, out: vec3): vec3   
   - **a**: The matrix.
   - **v**: The vector.
   - **out**: The result transformed vector.

- *static* **MAT3_PROJECTION**(w: number, h: number, out: mat3): mat3   
   - **w**: The width;
   - **h**: The height;
   - **out**: The result matrix.

- *static* **MAT3_ROTATE**(a: number, out: mat3): mat3   
   - **a**: The angle.
   - **out**: The result matrix.

- *static* **MAT3_SCALE**(x: number, y: number, out: mat3): mat3   
   - **x**: The x-scale.
   - **y**: The y-scale.
   - **out**: The result matrix.

- *static* **MAT3_TRANSFORM**(position: vec2, offset: vec2, rotation: number, scale: vec2, out: mat3): mat3   
   - **position**: The position vector.
   - **offset**: The offset translation.
   - **rotation**: The rotation angle.
   - **scale**: The scale vector.
   - **out**: The result matrix.

- *static* **MAT3_TRANSLATE**(x: number, y: number, out: mat3): mat3   
   - **x**: The x-translation.
   - **y**: The y-translation.
   - **out**: The result matrix.

- *static* **MAT4_COMPUTE**(matrices: mat4[]): mat4   
   - **matrices**: The list of matrix to multiply.

- *static* **MAT4_COPY**(src: mat4, out: mat4): mat4   
   - **src**: The source matrix.
   - **out**: The destination matrix.

- *static* **MAT4_CREATE**(): Float32Array   

- *static* **MAT4_IDENTITY**(out: mat4): mat4   
   - **out**: The matrix identity.

- *static* **MAT4_INVERT**(a: mat4, out: mat4): mat4   
   - **a**: The origin matrix.
   - **out**: The inverted matrix.

- *static* **MAT4_LOOKAT**(position: vec3, target: vec3, vertical: vec3, out: mat4): mat4   
   - **position**: The position.
   - **target**: The target.
   - **vertical**: The up vector.
   - **out**: The result matrix.

- *static* **MAT4_MULTIPLY**(a: mat4, b: mat4, out: mat4): mat4   
   - **a**: The first matrix.
   - **b**: The second matrix.
   - **out**: The result matrix.

- *static* **MAT4_MULTIPLY_BY_VEC4**(a: mat4, v: vec4, out: vec4): vec4   
   - **a**: The matrix.
   - **v**: The vector.
   - **out**: The result vector.

- *static* **MAT4_ORTHO**(left: number, right: number, bottom: number, top: number, near: number, far: number, out: mat4): mat4   
   - **left**: The left limit.
   - **right**: The right limit.
   - **bottom**: The bottom limit.
   - **top**: The top limit.
   - **near**: The near limit.
   - **far**: The far limit.
   - **out**: The result matrix.

- *static* **MAT4_ORTHOGRAPHIC**(width: number, height: number, depth: number, out: mat4): mat4   
   - **width**: The width.
   - **height**: The height.
   - **depth**: The depth.
   - **out**: The result matrix.

- *static* **MAT4_PERSPECTIVE**(fov: number, ar: number, near: number, far: number, out: mat4): mat4   
   - **fov**: The fovy angle.
   - **ar**: The aspect-ratio.
   - **near**: The near value.
   - **far**: The far value.
   - **out**: The result matrix.

- *static* **MAT4_ROTATE_X**(a: number, out: mat4): mat4   
   - **a**: The x-angle.
   - **out**: The result matrix.

- *static* **MAT4_ROTATE_Y**(a: number, out: mat4): mat4   
   - **a**: The y-angle.
   - **out**: The result matrix.

- *static* **MAT4_ROTATE_Z**(a: number, out: mat4): mat4   
   - **a**: The z-angle.
   - **out**: The result matrix.

- *static* **MAT4_SCALE**(x: number, y: number, z: number, out: mat4): mat4   
   - **x**: The x-scale.
   - **y**: The y-scale.
   - **z**: The z-scale.
   - **out**: The result matrix.

- *static* **MAT4_TRANSFORM**(position: vec3, rotation: vec3, scale: vec3, quaternion: Quaternion, out: mat4): mat4   
   - **position**: The position vector.
   - **rotation**: The rotation vector (y -> x -> z).
   - **scale**: The scale vector.
   - **quaternion**: The rotation quaternion.
   - **out**: The result matrix.

- *static* **MAT4_TRANSLATE**(x: number, y: number, z: number, out: mat4): mat4   
   - **x**: The x-translation.
   - **y**: The y-translation.
   - **z**: The z-translation.
   - **out**: The result matrix.

- *static* **MAT4_TRANSPOSE**(a: mat4, out: mat4): mat4   
   - **a**: The source matrix.
   - **out**: The transposed matrix.

- *static* **RANDARRAY**(min: number, max: number)   
   - **min**: The min.
   - **max**: The max.

- *static* **RANGE_ARRAY**(start: number, stop: number, step: number)   
   - **start**: The start value.
   - **stop**: The stop value.
   - **step**: Increment step.

- *static* **RAY_BOX**(origin: vec3, dir: vec3, min: vec3, max: vec3, outIntersectPoint: vec3): boolean   
   - **origin**: The origin ray.
   - **dir**: The direction ray.
   - **min**: The min box.
   - **max**: The max box.
   - **outIntersectPoint**: The intersection point.

- *static* **RAY_PLAN**(origin: vec3, dir: vec3, a: vec3, n: vec3, culling: boolean, outIntersectPoint: vec3): boolean   
   - **origin**: The origin ray.
   - **dir**: The direction ray.
   - **a**: The plan corner.
   - **n**: The plan normal.
   - **culling**: Culling enabled flag.
   - **outIntersectPoint**: The intersection point.

- *static* **RAY_TRIANGLE**(origin: vec3, dir: vec3, a: vec3, b: vec3, c: vec3, culling: boolean, outIntersectPoint: vec3): boolean   
   - **origin**: The origin ray.
   - **dir**: The direction ray.
   - **a**: The first triangle point.
   - **b**: The second triangle point.
   - **c**: The third triangle point.
   - **culling**: Culling enabled flag.
   - **outIntersectPoint**: The intersection point.

- *static* **SHUFFLE**(arr: any[])   
   - **arr**: The array to shuffle.

- *static* **SPREAD**(base: number, spread: number): number   
   - **base**: The origin value.
   - **spread**: The spread value.

- *static* **TO_FIXED_NUMBER**(num: number, digits: number, base: number): number   
   - **num**: The number.
   - **digits**: The number after float.
   - **base**: The numeric base.

- *static* **TRI2_POINT_INSIDE**(p: vec2, a: vec2, b: vec2, c: vec2): number   
   - **p**: The point.
   - **a**: The first triangle point.
   - **b**: The second triangle point.
   - **c**: The third triangle point.

- *static* **TRI3_NORMAL**(a: vec3, b: vec3, c: vec3, out: vec3): vec3   
   - **a**: The first triangle point.
   - **b**: The second triangle point.
   - **c**: The third triangle point.
   - **out**: The normal vector.

- *static* **TRI3_POINT_ELEVATION**(p: vec2, a: vec3, b: vec3, c: vec3): number   
   - **p**: The point.
   - **a**: The first triangle point.
   - **b**: The second triangle point.
   - **c**: The third triangle point.

- *static* **TRI3_POINT_INSIDE**(p: vec3, a: vec3, b: vec3, c: vec3): boolean   
   - **p**: The point.
   - **a**: The first triangle point.
   - **b**: The second triangle point.
   - **c**: The third triangle point.

- *static* **VEC1_COPY**(src: number, out: vec1): vec1   
   - **src**: Number.
   - **out**: Vector one.

- *static* **VEC2_2D_TO_ISO**(p: vec2): vec2   
   - **p**: The ortho point.

- *static* **VEC2_ADD**(a: vec2, b: vec2, out: vec2): vec2   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The result vector.

- *static* **VEC2_ADD_SCALED**(a: vec2, b: vec2, scale: number, out: vec2): vec2   
   - **a**: The first vector.
   - **b**: The second vector to scale and add to the first.
   - **scale**: The scale value for second vector.
   - **out**: The result vector.

- *static* **VEC2_ANGLE**(a: vec2): number   
   - **a**: The vector.

- *static* **VEC2_ANGLE_BETWEEN**(a: vec2, b: vec2): number   
   - **a**: The first vector.
   - **b**: The second vector.

- *static* **VEC2_COPY**(src: vec2, out: vec2): vec2   
   - **src**: The source vector.
   - **out**: The destination vector.

- *static* **VEC2_CREATE**(x: number, y: number): Float32Array   
   - **x**: The first component.
   - **y**: The second component.

- *static* **VEC2_CROSS**(a: vec2, b: vec2): number   
   - **a**: The first vector.
   - **b**: The second vector.

- *static* **VEC2_DISTANCE**(a: vec2, b: vec2): number   
   - **a**: The first point.
   - **b**: The second point.

- *static* **VEC2_DOT**(a: vec2, b: vec2): number   
   - **a**: The first vector.
   - **b**: The second vector.

- *static* **VEC2_ISEQUAL**(a: vec2, b: vec2): boolean   
   - **a**: The first vector.
   - **b**: The second vector.

- *static* **VEC2_ISO_CARDINAL_POINTS**(direction: string, depth: number, width: number)   
   - **direction**: The direction (FORWARD, BACKWARD, LEFT, RIGHT)
   - **depth**: The depth of shape.
   - **width**: The width of shape.

- *static* **VEC2_ISO_TO_2D**(p: vec2): vec2   
   - **p**: The iso point.

- *static* **VEC2_ISZERO**(a: vec2): boolean   
   - **a**: The vector to check.

- *static* **VEC2_LENGTH**(a: vec2): number   
   - **a**: The source vector.

- *static* **VEC2_MULTIPLY**(a: vec2, b: vec2, out: vec2): vec2   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The result vector.

- *static* **VEC2_NORMALIZE**(a: vec2, out: vec2): vec2   
   - **a**: The source vector.
   - **out**: The normalized vector.

- *static* **VEC2_OPPOSITE**(a: vec2, out: vec2): vec2   
   - **a**: The source vector.
   - **out**: The opposite vector.

- *static* **VEC2_ORIENTATION**(p: vec2, q: vec2, r: vec2): number   
   - **p**: The first point.
   - **q**: The second point.
   - **r**: The third point.

- *static* **VEC2_PARSE**(str: string, separator: string, out: vec2): vec2   
   - **str**: The string.
   - **separator**: The token separator between components.
   - **out**: The vector.

- *static* **VEC2_PROJECTION_COS**(a: vec2, b: vec2, out: vec2): vec2   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The projection vector.

- *static* **VEC2_QUADRATIC_BEZIER**(p0: vec2, p1: vec2, p2: vec2, t: number, out: vec2): vec2   
   - **p0**: The start point.
   - **p1**: The inter point.
   - **p2**: The end point.
   - **t**: The time.
   - **out**: The result point.

- *static* **VEC2_ROTATE_AROUND**(center: vec2, radius: number, angle: number): vec2   
   - **center**: The position you want to rotate around.
   - **radius**: The radius relative to the center of the rotation.
   - **angle**: The angle rotation.

- *static* **VEC2_SCALE**(a: vec2, scale: number, out: vec2): vec2   
   - **a**: The first vector.
   - **scale**: The scale value.
   - **out**: The result vector.

- *static* **VEC2_SPREAD**(base: vec2, spread: vec2): vec2   
   - **base**: The base vector.
   - **spread**: The spread vector.

- *static* **VEC2_SUBSTRACT**(a: vec2, b: vec2, out: vec2): vec2   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The result vector.

- *static* **VEC3_ADD**(a: vec3, b: vec3, out: vec3): vec3   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The result vector.

- *static* **VEC3_ADD_SCALED**(a: vec3, b: vec3, scale: number, out: vec3): vec3   
   - **a**: The first vector.
   - **b**: The second vector to scale and add to the first.
   - **scale**: The scale value for second vector.
   - **out**: The result vector.

- *static* **VEC3_COPY**(src: vec3, out: vec3): vec3   
   - **src**: The source vector.
   - **out**: The destination vector.

- *static* **VEC3_CREATE**(x: number, y: number, z: number): Float32Array   
   - **x**: The first component.
   - **y**: The second component.
   - **z**: The third component.

- *static* **VEC3_CROSS**(a: vec3, b: vec3, out: vec3): vec3   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The cross vector.

- *static* **VEC3_DISTANCE**(a: vec3, b: vec3): number   
   - **a**: The first point.
   - **b**: The second point.

- *static* **VEC3_DOT**(a: vec3, b: vec3): number   
   - **a**: The first vector.
   - **b**: The second vector.

- *static* **VEC3_ISEQUAL**(a: vec3, b: vec3): boolean   
   - **a**: The first vector.
   - **b**: The second vector.

- *static* **VEC3_ISZERO**(a: vec3): boolean   
   - **a**: The vector to check.

- *static* **VEC3_LENGTH**(a: vec3): number   
   - **a**: The vector.

- *static* **VEC3_MULTIPLY**(a: vec3, b: vec3, out: vec3): vec3   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The result vector.

- *static* **VEC3_NORMALIZE**(a: vec3, out: vec3): vec3   
   - **a**: The origin vector.
   - **out**: The normalized vector.

- *static* **VEC3_OPPOSITE**(a: vec3, out: vec3): vec3   
   - **a**: The origin vector.
   - **out**: The opposite vector.

- *static* **VEC3_PARSE**(str: string, separator: string, out: vec3): vec3   
   - **str**: The string.
   - **separator**: The token separator between components.
   - **out**: The vector.

- *static* **VEC3_QUADRATIC_BEZIER**(p0: vec3, p1: vec3, p2: vec3, t: number, out: vec3): vec3   
   - **p0**: The start point.
   - **p1**: The inter point.
   - **p2**: The end point.
   - **t**: The time.
   - **out**: The result point.

- *static* **VEC3_ROTATE_AROUND**(center: vec3, radius: number, phi: number, theta: number): vec3   
   - **center**: The position you want to rotate around.
   - **radius**: The radius relative to the center of the rotation.
   - **phi**: The phi angle.
   - **theta**: The theta angle.

- *static* **VEC3_SCALE**(a: vec3, scale: number, out: vec3): vec3   
   - **a**: The first vector.
   - **scale**: The scale value.
   - **out**: The result vector.

- *static* **VEC3_SPREAD**(base: vec3, spread: vec3): vec3   
   - **base**: The base vector.
   - **spread**: The spread vector.

- *static* **VEC3_SUBSTRACT**(a: vec3, b: vec3, out: vec3): vec3   
   - **a**: The first vector.
   - **b**: The second vector.
   - **out**: The result vector.

- *static* **VEC4_COPY**(src: vec4, out: vec4): vec4   
   - **src**: The source vector.
   - **out**: The destination vector.

- *static* **VEC4_CREATE**(x: number, y: number, z: number, w: number): Float32Array   
   - **x**: The first component.
   - **y**: The second component.
   - **z**: The third component.
   - **w**: The fourth component.

- *static* **VEC4_ISZERO**(a: vec4): boolean   
   - **a**: The vector to check.

- *static* **VEC4_PARSE**(str: string, separator: string, out: vec4): vec4   
   - **str**: The string.
   - **separator**: The token separator between components.
   - **out**: The vector.

- *static* **WAIT**(ms: number): Promise   
   - **ms**: Time to wait (in milliseconds).
