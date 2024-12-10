# Gfx3TextureManager

Singleton 3D textures manager.
## Constructors
- **new Gfx3TextureManager**(): Gfx3TextureManager   
## Methods
- **deleteTexture**(path: string): void   
Deletes a texture if it exists, otherwise it throws an error.
   - **path**: The file path.

- **getTexture**(path: string): Gfx3Texture   
Returns a texture or throws an error if doesn't exist.
   - **path**: The file path.

- **hasTexture**(path: string): boolean   
Checks if a texture exists.
   - **path**: The path file.

- **loadCubemapTexture**(path: string, extension: string): Promise   
Load asynchronously a list of cubemap images from a given path and returns it as an texture, caching it for future use.
Note: Six images are required, each names postfixed by: right, left, top, bottom, front and back.
   - **path**: The file path excluding directions postfix.
   - **extension**

- **loadTexture**(path: string, samplerDescriptor: GPUSamplerDescriptor): Promise   
Loads asynchronously an image from a given path and returns it as a texture, caching it for future use.
   - **path**: The file path.
   - **samplerDescriptor**: The sampler texture configuration, see https://www.w3.org/TR/webgpu/#GPUSamplerDescriptor.

- **loadTexture8bit**(path: string, samplerDescriptor: GPUSamplerDescriptor): Promise   
Load asynchronously an image from a given path and returns it as an 8bits texture, caching it for future use.
   - **path**: The file path.
   - **samplerDescriptor**: The sampler texture configuration, see https://www.w3.org/TR/webgpu/#GPUSamplerDescriptor.

- **releaseTextures**(): void   
Deletes all stored textures.
