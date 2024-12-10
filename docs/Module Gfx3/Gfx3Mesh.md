# Gfx3Mesh

A 3D base mesh object.
- inherit from: Gfx3Drawable
- parent of: Gfx3MeshJAM, Gfx3MeshJSM, Gfx3MeshOBJ
## Constructors
- **new Gfx3Mesh**(): Gfx3Mesh   
## Methods
- **clone**(mesh: Gfx3Mesh, transformMatrix: mat4): Gfx3Mesh   
Clone the object.
   - **mesh**: The copy object.
   - **transformMatrix**: The transformation matrix.

- **delete**(keepMat: boolean): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.
   - **keepMat**: Determines if the material is deleted or not.

- **draw**(): void   
The draw function.

- **getMaterial**(): Gfx3Material   
Returns the material.

- **getShadowCasting**(): boolean   
Check if shadow casting is enable or not.

- **setMaterial**(material: Gfx3Material, keepMat: boolean): void   
Set a material.
   - **material**: The material.
   - **keepMat**: Determines whether to keep the current material or delete it before assigning the new material.

- **setShadowCasting**(shadowCasting: boolean): void   
Set the shadow casting.
   - **shadowCasting**: Determines if object cast shadows.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.

- *static* **buildVertices**(vertexCount: number, coords: number[], texcoords: number[], colors: number[], normals: number[], groups: Group[])   
Useful function takes various vertex data and returns vertices with calculated normals, tangents, and binormals in the engine format.
   - **vertexCount**: The total number of vertices in the mesh.
   - **coords**: A list of vertex coordinates.
   - **texcoords**: A list of vertex texture coordinates.
   - **colors**: A list of vertex color.
   - **normals**: A list of vertex normal.
   - **groups**: A list of vertex group.
