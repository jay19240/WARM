# Gfx3MeshShadowRenderer

## Constructors
- **new Gfx3MeshShadowRenderer**(): Gfx3MeshShadowRenderer   
## Methods
- **drawMesh**(mesh: Gfx3Mesh, matrix): void   
Draw a mesh.
   - **mesh**: The mesh.
   - **matrix**: The transformation matrix.

- **getDepthTexture**(): Gfx3Texture   
Returns the depth texture.

- **getLVPMatrix**(): Float32Array   
Returns the light view projection matrix (LVP).

- **render**(): void   
The render function.

- **setDepthTextureSize**(depthTextureSize: number): void   
Set the size of a the shadow map depth texture.
More resolution is hight, more shadow is precise.
   - **depthTextureSize**: The size.

- **setShadowProjection**(position: vec3, target: vec3, size: number, depth: number): void   
Set a shadow projection.
   - **position**: The position of shadow coming from.
   - **target**: Determine the direction in which the shadow is pointing.
   - **size**: Determines the size of the shadow map that will be generated.
   - **depth**: Determines how far the shadow projection extends in the scene.
