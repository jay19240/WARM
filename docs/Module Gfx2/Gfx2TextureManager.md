# Gfx2TextureManager

Singleton textures manager.
## Constructors
- **new Gfx2TextureManager**(): Gfx2TextureManager   
## Methods
- **deleteTexture**(path: string): void   
Deletes a texture if it exists, otherwise it throws an error.
   - **path**: The file path.

- **getTexture**(path: string): ImageBitmap   
Returns an `ImageBitmap` object for a given texture path, or throws an error if the texture doesn't exist.
   - **path**: The file path.

- **hasTexture**(path: string): boolean   
Checks if texture exists.
   - **path**: The file path.

- **loadTexture**(path: string): Promise   
Loads asynchronously an image from a given path, caching it for future use and returns it as an `ImageBitmap`.
   - **path**: The file path.

- **releaseTextures**(): void   
Deletes all stored textures.
