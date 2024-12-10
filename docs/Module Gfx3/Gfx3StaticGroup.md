# Gfx3StaticGroup

Interface to bind the uniform buffer and textures to the GPU pipeline.
Note: Used for one bind group.
## Constructors
- **new Gfx3StaticGroup**(device: GPUDevice, pipeline: GPURenderPipeline, groupIndex: number): Gfx3StaticGroup   
   - **device**: The GPU device.
   - **pipeline**: The graphics pipeline.
   - **groupIndex**: The shader group index.
## Methods
- **allocate**(): void   
Creates a bind group with the provided uniforms and textures entries.

- **beginWrite**(): void   
Prepare to write process.
Warning: You need to call this method before write your data.

- **delete**(): void   
Destroys the GPU buffer.
Warning: you need to call this method to free allocation for this object.

- **endWrite**(): void   
Close the write process.

- **getBindGroup**(): GPUBindGroup   
Returns the bind group.

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

- **setSampler**(binding: number, name: string, texture: Gfx3Texture): Gfx3Texture   
Set a sampler resource for uniform entry.
   - **binding**: The binding index of the uniform in the shader program.
   - **name**: The name of the uniform.
   - **texture**: The texture.

- **setTexture**(binding: number, name: string, texture: Gfx3Texture, createViewDescriptor: GPUTextureViewDescriptor): Gfx3Texture   
Set a texture resource for uniform entry.
   - **binding**: The binding index of the uniform in the shader program.
   - **name**: The name of the uniform.
   - **texture**: The texture.
   - **createViewDescriptor**: Specify how the texture view should be created, such as the format, dimension, and mip
level range of the view.

- **write**(binding: number, data): void   
Write data buffer to the uniform buffer.
   - **binding**: The binding index of the uniform in the shader program.
   - **data**: The data buffer.
