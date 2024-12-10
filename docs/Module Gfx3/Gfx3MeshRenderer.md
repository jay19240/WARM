# Gfx3MeshRenderer

Singleton mesh renderer.
- inherit from: Gfx3RendererAbstract
## Constructors
- **new Gfx3MeshRenderer**(): Gfx3MeshRenderer   
## Methods
- **drawDecal**(group: number, sx: number, sy: number, sw: number, sh: number, position: vec3, orientationX: vec3, orientationY: vec3, orientationZ: vec3, size: vec3, opacity: number): void   
Draw a decal.
   - **group**: The group target (mesh is identified by its 'g' id component).
   - **sx**: The x-coordinate of the decal sprite in the atlas texture.
   - **sy**: The y-coordinate of the decal sprite in the atlas texture.
   - **sw**: The width of the decal sprite in the atlas texture.
   - **sh**: The height of the decal sprite in the atlas texture.
   - **position**: The position of projector (center).
   - **orientationX**: The x-axis orientation of the projector.
   - **orientationY**: The y-axis orientation of the projector.
   - **orientationZ**: The z-axis orientation of the projector.
   - **size**: The size (width, height, depth) of the projector.
   - **opacity**: The opacity or transparency of the decal.

- **drawDirLight**(direction: vec3, ambient: vec3, diffuse: vec3, specular: vec3, intensity: number): void   
Draw a directional light.
   - **direction**: The direction.
   - **ambient**: The ambient color.
   - **diffuse**: The diffuse color.
   - **specular**: The specular color.
   - **intensity**: The strength or brightness.

- **drawMesh**(mesh: Gfx3Mesh, matrix): void   
Draw a mesh.
   - **mesh**: The mesh.
   - **matrix**: The transformation matrix.

- **drawPointLight**(position: vec3, ambient: vec3, diffuse: vec3, specular: vec3, intensity: number, constant: number, linear: number, exp: number): void   
Draw a point light.
   - **position**: The position.
   - **ambient**: The ambient color.
   - **diffuse**: The diffuse color.
   - **specular**: The specular color.
   - **intensity**: The brightness or strength.
   - **constant**: The constant attenuation factor of the point light.
   - **linear**: The linear attenuation factor of the point light.
   - **exp**: The exponent of the attenuation equation for the point light.

- **enableFog**(enabled: boolean, from: vec3, color: vec3, near: number, far: number): void   
Enable the fog.
   - **enabled**: Indicating whether the fog is enabled or not.
   - **from**: The fog origin point.
   - **color**: The fog color.
   - **near**: The distance from the camera at which the fog starts to appear.
   - **far**: The distance from the camera at which the fog effect should start to fade out.

- **enableShadow**(enabled: boolean): void   
Enable the shadowing projection.
   - **enabled**: Indicating whether the shadow should be enabled or disabled.

- **render**(): void   
The render function.

- **setDecalAtlas**(decalAtlas: Gfx3Texture): void   
Set the decal texture atlas.
   - **decalAtlas**: The decal texture atlas.
