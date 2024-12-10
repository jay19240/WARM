# Gfx3Skybox

A cubemap skybox.
- inherit from: Gfx3Drawable
## Constructors
- **new Gfx3Skybox**(): Gfx3Skybox   
## Methods
- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **draw**(): void   
The draw function.

- **getCubemap**(): Gfx3Texture   
Returns the cubemap texture.

- **getGroup01**(): Gfx3StaticGroup   
Returns the bindgroup(1).

- **setCubemap**(cubemap: Gfx3Texture): void   
Set the cubemap texture.
   - **cubemap**: The cubemap texture.
