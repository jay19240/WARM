# Curve

A cubic curve.
## Constructors
- **new Curve**(): Curve   
## Methods
- *static* **createInterpolator**(points: vec_any[], options: CurveOptions): default   
Create and returns a curve interpolator.
   - **points**: Control points.
   - **options**: Interpolator options.

- *static* **createInterpolatorFromFile**(path: string): Promise   
Create a curve interpolator from asynchronously loads curve data from a json file and return it.
   - **path**: The file path.
