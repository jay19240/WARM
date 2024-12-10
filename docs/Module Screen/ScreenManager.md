# ScreenManager

Singleton screen manager.
Note: requestPush, requestSet and requestPop are all asynchronously method and will be executed safely in the update loop.
## Constructors
- **new ScreenManager**(): ScreenManager   
## Methods
- **draw**(): void   
The draw function.

- **requestPopScreen**(): void   
Remove the top screen from the screen stack, previous screen become the top.

- **requestPushScreen**(newScreen: Screen, args: any): void   
Pushes a new screen to the stack, throwing an error if the screen is already present.
Note: The screen is pushed just after the onEnter method done the job.
   - **newScreen**: The screen.
   - **args**: Arguments that are passed to the new screen onEnter method.

- **requestSetScreen**(newScreen: Screen, args: any): void   
Set a new and unique screen to the stack (all screens are removed).
Note: The screen is pushed just after the onEnter method done the job.
   - **newScreen**: The screen.
   - **args**: Arguments that are passed to the new screen onEnter method.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
