# Gfx3MeshOBJ

A 3D obj wavefront mesh object.
Note: In fact this mesh is composed by multiple sub-meshes, one by "object".
So, you can choose to manipulate them individually or together with that top-level mesh.

OBJ Options:
- Multiple meshes.
- Optionnal Vertex Normals
- Optionnal Vertex Colors
- Smooth Groups

MTL Options:
- Kd => Diffuse
- Ks => Specular
- Ns => Specularity
- Ke => Emissive
- d  => Opacity
- map_Kd => Albedo map
- map_Ns => Specularity map
- map_Bump => Normal map
- inherit from: Gfx3Mesh
## Constructors
- **new Gfx3MeshOBJ**(): Gfx3MeshOBJ   
## Methods
- **$build**(): void   

- **$loadMaterials**(path: string): Promise   
The "$loadMaterials" function asynchronously loads materials from a specified file (mtl).
   - **path**: The `path` parameter is the `mtl` file path.

- **$loadObjects**(path: string): Promise   
The "$loadObjects" function asynchronously loads objects from a specified file (obj).
   - **path**: The `path` parameter is the `obj` file path.

- **clone**(obj: Gfx3MeshOBJ, transformMatrix: mat4): Gfx3MeshOBJ   
Clone the object.
   - **obj**: The copy object.
   - **transformMatrix**: The transformation matrix.

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **draw**(): void   
The draw function.

- **getBoundingBox**(): Gfx3BoundingBox   
Returns the bounding box.

- **getMesh**(name: string): Gfx3Mesh   
Returns mesh object with the specified name, or throws an error if the object doesn't exist.
   - **name**: The name.

- **getMeshes**(): IterableIterator   
Returns all mesh objects.

- **getObject**(name: string): OBJObject   
Returns data object with the specified name, or throws an error if the object doesn't exist.
   - **name**: The name.

- **getVertexCount**(): number   
Returns the vertex count.

- **getVertices**()   
Returns the vertices.

- **getWorldBoundingBox**(): Gfx3BoundingBox   
Returns the bounding box in the world space coordinates.

- **loadFromFile**(objPath: string, mtlPath: string): Promise   
Load asynchronously data from obj and mtl files and build the mesh.
   - **objPath**: The obj file path.
   - **mtlPath**: The mtl file path.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
