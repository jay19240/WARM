# Screen

A screen in a game like "start-screen", "menu-screen", "game-screen" or "pause-screen.
It is your top-level classes with methods for updating, drawing, entering, exiting.
## Constructors
- **new Screen**(): Screen   
## Methods
- **draw**(): void   
Virtual draw function.

- **isBlocking**(): boolean   
Check if the screen is blocking or not.

- **onBringToBack**(newScreen: Screen): void   
Virtual method that is called when the top state level is lost.
   - **newScreen**: The new top level screen.

- **onBringToFront**(oldScreen: Screen): void   
Virtual method that is called when the top state level is obtained.
   - **oldScreen**: The previous top level screen.

- **onEnter**(args: any): Promise   
Virtual asynchronous method that is called when screen is pushed to the stack.
   - **args**: Used to pass any additional arguments or data to the "onEnter" method.

- **onExit**(): void   
Virtual method that is called when screen is removed from the stack.

- **setBlocking**(blocking: boolean): void   
Set the blocking state.
   - **blocking**: Determines whether the screen execution should be blocked or not.

- **update**(ts: number): void   
Virtual update function.
   - **ts**: The timestep.
