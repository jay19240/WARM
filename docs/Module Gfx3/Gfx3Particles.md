# Gfx3Particles

The 3D particles diffuser.
- inherit from: Gfx3Drawable
## Constructors
- **new Gfx3Particles**(options: Partial): Gfx3Particles   
   - **options**: Various options for configuring the behavior of the particles cloud.
## Methods
- **$createParticle**(): Particle   

- **$updateGeometry**(ts: number): void   
   - **ts**

- **$updateLifeCycle**(ts: number): void   
   - **ts**

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **draw**(): void   
The draw function.

- **getGroup02**(): Gfx3StaticGroup   
Returns the bindgroup(2).

- **getTexture**()   
Returns the particle texture.

- **setTexture**(texture: Gfx3Texture): void   
Set the particle texture.
   - **texture**: The texture.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
