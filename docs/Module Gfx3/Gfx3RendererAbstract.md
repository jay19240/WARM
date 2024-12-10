# Gfx3RendererAbstract

Abstract class for all 3D renderer.
- parent of: Gfx3DebugRenderer, Gfx3FlareRenderer, Gfx3MeshRenderer, Gfx3ParticlesRenderer, Gfx3PPERenderer, Gfx3SkyboxRenderer, Gfx3SpriteRenderer
## Constructors
- **new Gfx3RendererAbstract**(pipelineId: string, vertexShader: string, fragmentShader: string, pipelineDesc: GPURenderPipelineDescriptor): Gfx3RendererAbstract   
   - **pipelineId**: A unique identifier for the render pipeline.
   - **vertexShader**: The code for the vertex shader.
   - **fragmentShader**: The code for the fragment shader.
   - **pipelineDesc**: The configuration of the pipeline, such as the vertex and fragment shaders, the color and depth formats, the primitive topology
