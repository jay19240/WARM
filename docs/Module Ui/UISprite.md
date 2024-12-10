# UISprite

A UI widget displaying a sprite with animations.
It emit 'E_FINISHED'
- inherit from: UIWidget
## Constructors
- **new UISprite**(options): UISprite   
   - **options**: Contains only class name.
## Methods
- **getAnimations**()   
Returns the list of animation descriptors.

- **getCurrentAnimation**()   
Returns the current animation or null if there is no current animation.

- **getCurrentAnimationFrameIndex**(): number   
Returns the current animation frame index.

- **loadFromFile**(path: string): Promise   
Load asynchronously sprite data from a json file (jas).
   - **path**: The file path.

- **loadTexture**(imageFile: string): Promise   
Load asynchronously an image file.
   - **imageFile**: The file path.

- **play**(animationName: string, isLooped: boolean, preventSameAnimation: boolean): void   
Play a specific animation.
   - **animationName**: The name of the animation to be played.
   - **isLooped**
   - **preventSameAnimation**: Determines whether the same animation should be prevented from playing again.

- **setAnimations**(animations: JASAnimation[]): void   
Set the animations descriptors.
   - **animations**: The animations data.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
