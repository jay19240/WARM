# UIPrint

A UI widget displaying a full screen dialog print with text.
It is ideal for long-text reading.
It emit 'E_PRINT_FINISHED'
It emit 'E_OK'
- inherit from: UIWidget
## Constructors
- **new UIPrint**(): UIPrint   
## Methods
- **$handleClick**(): void   

- **onAction**(actionId: string): void   
The onAction function.
Note: It emits an 'E_OK' event if the actionId is 'OK' and text is finished.
   - **actionId**

- **setStepDuration**(stepDuration: number): void   
Set the text speed.
   - **stepDuration**: The duration of a text update.

- **setText**(text: string): void   
Set the dialog text.
   - **text**: The dialog text.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
