# Gfx3Material

The material of a surface.
It emit 'E_FINISHED' (on texture animation end)
## Constructors
- **new Gfx3Material**(options: MATOptions): Gfx3Material   
   - **options**: The options to configure the material.
## Methods
- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **enableDecal**(enabled: boolean): void   
Enable decals on the material surface.
   - **enabled**: Indicating whether decals should be enabled or disabled.

- **enableShadow**(enabled: boolean): void   
Enable shadow on the material surface.
   - **enabled**: Indicating whether the shadow should be enabled or disabled.

- **getDiffuseMap**(): Gfx3Texture   
Returns the diffuse texture map.

- **getDisplacementMap**(): Gfx3Texture   
Returns the displacement texture map.

- **getEmissiveMap**(): Gfx3Texture   
Returns the emissive texture map.

- **getEnvMap**(): Gfx3Texture   
Returns the environment texture map.

- **getGroup02**(): Gfx3StaticGroup   
Returns the bindgroup(2).

- **getGroup03**(): Gfx3StaticGroup   
Returns the bingroup(3).

- **getNormalMap**(): Gfx3Texture   
Returns the normal texture map.

- **getSpecularMap**(): Gfx3Texture   
Returns the specularity texture map.

- **getTexture**(): Gfx3Texture   
Returns the albedo texture.

- **playAnimation**(animationName: string, looped: boolean, preventSameAnimation: boolean): void   
Play a specific animation.
   - **animationName**: The name of the animation to be played.
   - **looped**: Determines whether the animation should loop or not.
   - **preventSameAnimation**: Determines whether the same animation should be prevented from playing again.

- **resetAnimation**(): void   
Stop animation and set current animation to null.

- **setAmbient**(r: number, g: number, b: number): void   
Set the ambient color (see phong).
It is the color of the object on it's shadow parts.
   - **r**: The red component.
   - **g**: The green component.
   - **b**: The blue component.

- **setDiffuse**(r: number, g: number, b: number): void   
Set the diffuse color (see phong).
It is the color of the object on it's lightning parts.
   - **r**: The red component.
   - **g**: The green component.
   - **b**: The blue component.

- **setDiffuseMap**(diffuseMap: Gfx3Texture): void   
Set the diffuse texture map.
   - **diffuseMap**: The diffuse texture map.

- **setDisplacementMap**(displacementMap: Gfx3Texture, angle: number, rate: number, factor: number): void   
Set the displacement texture map.
It is used to displace pixels of the texture base. It is ideal for water shallow effect, magma etc...
1. White pixel of this texture force pixel of the albedo texture to move in the top-left direction.
2. Grey don't move pixels.
3. Black pixel of this texture force pixel of the albedo texture to move in the bottom-right direction.
   - **displacementMap**: The displacement map texture.
   - **angle**: The angle at which the texture will be scrolled (in radians).
   - **rate**: The scrolling rate of the texture.
   - **factor**: The strength or intensity of the displacement effect.

- **setEmissive**(r: number, g: number, b: number, a: number): void   
Set the emissive color.
It is the color that the object emit.
   - **r**: The red component.
   - **g**: The green component.
   - **b**: The blue component.
   - **a**: The emissive factor.

- **setEmissiveFactor**(emissiveFactor: number): void   
Set the emissive factor.
   - **emissiveFactor**: The factor of emission color (0-1)

- **setEmissiveMap**(emissiveMap: Gfx3Texture): void   
Set the emissive texture map.
   - **emissiveMap**: The emissive texture map.

- **setEnvMap**(envMap: Gfx3Texture): void   
Set the environment texture map.
   - **envMap**: The env texture map.

- **setLightning**(lightning: boolean): void   
Set the lightning flag.
   - **lightning**: Indicates if light is applied or not to the material.

- **setNormalIntensity**(normalIntensity: number): void   
Set the normal bumping intensity.
   - **normalIntensity**: The normal intensity.

- **setNormalMap**(normalMap: Gfx3Texture): void   
Set a normal texture map.
   - **normalMap**: The normal texture map.

- **setOpacity**(opacity: number): void   
Sets the opacity value.
   - **opacity**: The opacity (from 0 to 1).

- **setShininess**(shininess: number): void   
Set the specular shininess.
   - **shininess**: The shininess/specularity value (0-1)

- **setSpecular**(r: number, g: number, b: number): void   
Set the specular color (see phong).
It is the color of the object on it's lightning and eye-oriented parts.
   - **r**: The red component.
   - **g**: The green component.
   - **b**: The blue component.

- **setSpecularMap**(specularMap: Gfx3Texture): void   
Set the specular texture map.
   - **specularMap**: The specular texture map.

- **setSpecularity**(specularity: number): void   
Set the specular intensity.
It determines how much light is reflected off the surface (from 0 to 1).
   - **specularity**: The level of specularity or shininess.

- **setTexture**(texture: Gfx3Texture, angle: number, rate: number): void   
Set the texture.
   - **texture**: The texture.
   - **angle**: The angle at which the texture will be scrolled (in radians).
   - **rate**: The scrolling rate of the texture.

- **update**(ts: number): void   
The update function.
   - **ts**

- *static* **createFromFile**(path: string): Promise   
Load asynchronously data and create material from a json file (mat).
   - **path**: The file path.
