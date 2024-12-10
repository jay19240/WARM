# CurveInterpolator

Cubic curve interpolator
## Constructors
- **new CurveInterpolator**(points: Vector[], options: CurveInterpolatorOptions): default   
Create a new interpolator instance
   - **points**: control points
   - **options**: curve interpolator options
## Methods
- **createLookupTable**(func, samples: number, options): Map   
Create and cache a lookup table of n=samples points, indexed by position (u)
   - **func**: function generating lookup table value
   - **samples**: number of samples (segments)
   - **options**: object of { from, to, cacheKey } - if cacheKey is included, the map will be stored in the internal cache

- **forEach**(func, samples, from: number, to: number): void   
Convenience function for iterating over multiple values for a set of samples along the curve.
The forEach function takes a user defined callback function, which will be called for each position
along the curve with its position (u), time (t), sample index (i) and the previous mapped value (prev)
   - **func**: callback function
   - **samples**: number of (evenly spaced) samples OR an array of user specified positions (u)
   - **from**: from position
   - **to**: to position

- **getBoundingBox**(from: number, to: number): BBox   
Get a bounding box for the curve or the segment given by the
from and to parameters
   - **from**: position from
   - **to**: position to

- **getCurvatureAt**(position: number)   
Finds the curvature and radius at the specified position (0..1) on the curve. The unsigned curvature
is returned along with radius, tangent vector and, for 2D and 3D curves, a direction vector is included
(which points toward the center of the curvature).
   - **position**: position on curve (0 - 1)

- **getCurvatureAtTime**(t: number)   
Finds the curvature and radius at the specified time (0..1) on the curve. The unsigned curvature
is returned along with radius, tangent vector and, for 2D and 3D curves, a direction vector is included
(which points toward the center of the curvature).
   - **t**: time (t) along curve (0 - 1)

- **getDerivativeAt**(position: number, target: T): T   
Get the derivative at the given position.
   - **position**: position on curve (0 - 1)
   - **target**: optional target

- **getFrenetFrames**(segments: number, from: number, to: number)   
Calculate the Frenet-Serret frames for a 3d curve, using the concept of parallel transport.
The implementation used here is basically a copy of the function used in THREE.js (https://github.com/mrdoob/three.js),
which in turn is based on the the paper "Parallel Transport Approach to Curve Framing" by Hanson and Ma
(https://legacy.cs.indiana.edu/ftp/techreports/TR425.pdf)

In the case of 2d, the normals are rotated 90 degrees counter-clockwise from the tangents and the binormals are omitted.
   - **segments**: number of samples (segments) along the curve (will return segments + 1 frames)
   - **from**: position from
   - **to**: position to

- **getIntersects**(v: number, axis: number, max: number, margin: number)   
Find points on the curve intersecting a specific value along a given axis. The axis is given as
an index from 0 - n, i.e. 0 = x-axis, 1 = y-axis, 2 = z-axis etc.

The max parameter is used to specify the maximum number of solutions you want returned, where max=0
returns all solutions and a negative number will return the max number of solutions starting from
the end of the curve and a positive number starting from the beginning of the curve. Note that If
max = 1 or -1, this function returns the point (unwrapped) or null if no intersects exist. In any
other case an array will be returned, regardless of there's multiple, a single or no solutions.
   - **v**: lookup value
   - **axis**: index of axis [0=x, 1=y, 2=z ...]
   - **max**: max solutions (i.e. 0=all, 1=first along curve, -1=last along curve)
   - **margin**

- **getIntersectsAsPositions**(v: number, axis: number, max: number, margin: number)   
Find positions (0-1) on the curve intersected by the given value along a given axis
   - **v**: lookup value
   - **axis**: index of axis [0=x, 1=y, 2=z ...]
   - **max**: max solutions (i.e. 0=all, 1=first along curve, -1=last along curve)
   - **margin**

- **getIntersectsAsTime**(v: number, axis: number, max: number, margin: number)   
Find intersects as time (0-1) on the curve intersected by the given value along a given axis
   - **v**: lookup value
   - **axis**: index of axis [0=x, 1=y, 2=z ...]
   - **max**: max solutions (i.e. 0=all, 1=first along curve, -1=last along curve)
   - **margin**

- **getLengthAt**(position: number, clampInput: boolean): number   

   - **position**: position on curve (0..1)
   - **clampInput**

- **getNearestPosition**(point: Vector, threshold: number, samples: number)   
Get the nearest position on the curve from a point. This is an approximation and its
accuracy is determined by the threshold value (smaller number requires more passes but is more precise)
   - **point**: Vector
   - **threshold**: Precision
   - **samples**

- **getNormalAt**(position: number, target: T): T   
Get the normal for 2D or 3D curve at the given position. In 3D the normal
points towards the center of the curvature.
   - **position**: position on curve (0 - 1)
   - **target**: optional target

- **getNormalAtTime**(t: number, target: T): T   
Get the normal for 2D or 3D curve at the given time (t). In 3D the normal
points towards the center of the curvature.
   - **t**: time at curve (0 - 1)
   - **target**: optional target

- **getPointAt**(position: number, target: T): T   
Interpolate a point at the given position.
   - **position**: position on curve (0..1)
   - **target**: optional target

- **getPointAtTime**(t: number, target: VectorType): Vector   
Get the point along the curve corresponding to the value of t (time along curve)
This function is only useful when you need to address the curve by time, where time
will vary depending on segment length and curvature. To address the curve normalized
for length (constant speed and uniform spacing), use the getPointAt function instead.
   - **t**: time along full curve (encodes segment index and segment t)
   - **target**: optional target vector

- **getPoints**(segments: number, returnType)   
Get uniformly sampled points along the curve. Returns samples + 1 points.
   - **segments**: number of samples (segments)
   - **returnType**: optional return type

- **getPositionAtKnot**(index: number): number   
Returns the position (u) of the knot at the specified index
   - **index**: index of knot (control/input point)

- **getPositionFromLength**(length: number, clampInput: boolean): number   
Returns the normalized position u for the specified length
   - **length**
   - **clampInput**: whether the input value should be clamped to a valid range or not

- **getPositionFromTime**(t: number, clampInput: boolean): number   
Returns the normalized position u for a normalized time value t
   - **t**: time on curve (0..1)
   - **clampInput**: whether the input value should be clamped to a valid range or not

- **getSecondDerivativeAt**(position: number, target: T): T   
Get the second derivative at the given position.
   - **position**: position on curve (0 - 1)
   - **target**: optional target

- **getTangentAt**(position: number, target: T): T   
Get the tangent at the given position.
   - **position**: position on curve (0 - 1)
   - **target**: optional target

- **getTangentAtTime**(t: number, target: T): T   
Get the tangent at the given time.
   - **t**: time at curve (0 - 1)
   - **target**: optional target

- **getTimeAtKnot**(index: number): number   
Returns the time (t) of the knot at the specified index
   - **index**: index of knot (control/input point)

- **getTimeFromPosition**(position: number, clampInput: boolean): number   
Returns the time on curve at a position, given as a value between 0 and 1
   - **position**: position on curve (0..1)
   - **clampInput**: whether the input value should be clamped to a valid range or not

- **map**(func, samples, from: number, to: number)   
Convenience function for returning multiple values for a set of samples along the curve.
The map function takes a user defined mapping function, which will be called for each position
along the curve with its position (u), time (t), sample index (i) and the previous mapped value (prev)
   - **func**: mapping function
   - **samples**: number of (evenly spaced) samples OR an array of user specified positions (u)
   - **from**: from position
   - **to**: to position

- **reduce**(func, initialValue: T, samples, from: number, to: number): T   
Convenience function for reducing multiple values for a set of samples along the curve.
This function takes a user defined reduce function, which will be called for each position
along the curve with its position (u), time (t), sample index (i) and the previous mapped value (prev)
   - **func**: reduce function
   - **initialValue**: initial accumulator value
   - **samples**: number of (evenly spaced) samples OR an array of user specified positions (u)
   - **from**: from position
   - **to**: to position

- **reset**(): void   
Reset any pre-calculated/cached data
