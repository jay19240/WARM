# Gfx3DynamicGroup

Interface to bind the uniform buffer and textures to the GPU pipeline.
Note: Used for multiple bind groups.
## Constructors
- **new Gfx3DynamicGroup**(device: GPUDevice, pipeline: GPURenderPipeline, groupIndex: number): Gfx3DynamicGroup   
   - **device**: The GPU device.
   - **pipeline**: The graphics pipeline.
   - **groupIndex**: The shader group index.
## Methods
- **allocate**(size: number): void   
Creates multiple bind groups with the provided uniforms entries.
   - **size**: The number of bind groups to allocate/duplicate.

- **beginWrite**(): void   
Prepare to write process.
Warning: You need to call this method before write your data.

- **delete**(): void   
Destroys the GPU buffer.
Warning: you need to call this method to free allocation for this object.

- **endWrite**(): void   
Close the write process.

- **getBindGroup**(index: number): GPUBindGroup   
Returns the bind group at specified index.
   - **index**: The index.

- **getSize**(): number   
Returns the number of bind groups.

- **setFloat**(binding: number, name: string, length: number): Float32Array   
Set a float-typed uniform entry and returns a writable buffer.
   - **binding**: The binding index of the uniform in the shader program.
   - **name**: The name of the uniform.
   - **length**: The number of float.

- **setInteger**(binding: number, name: string, length: number): Uint32Array   
Set a integer-typed uniform entry and returns a writable buffer.
   - **binding**: The binding index of the uniform in the shader program.
   - **name**: The name of the uniform.
   - **length**: The number of integer.

- **write**(binding: number, data): void   
Write data buffer to the uniform buffer.
   - **binding**: The binding index of the uniform in the shader program.
   - **data**: The data buffer.
