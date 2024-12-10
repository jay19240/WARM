# UIBubble

A floating dialog widget (looking as a bubble) with text and optional actions.
It emit 'E_PRINT_FINISHED'
It emit 'E_MENU_ITEM_SELECTED' with data { id, index }
It emit 'E_OK'
- inherit from: UIWidget
## Constructors
- **new UIBubble**(): UIBubble   
## Methods
- **$handleMenuItemSelected**(data: any): void   
   - **data**

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **focus**(): void   
Focus on.
Note: It focus `menu` too if actions is set.

- **onAction**(actionId: string): void   
The "onAction" function.
Note: It emits an 'E_OK' event if the actionId is 'OK' and text is finished.
   - **actionId**

- **setActions**(actions: string[]): void   
Set the actions menu.
   - **actions**: The list of actions.

- **setAuthor**(author: string): void   
Set the dialog author name's.
   - **author**: The name of the author.

- **setPicture**(pictureFile: string): void   
Set the dialog author avatar's.
   - **pictureFile**: The file path of the picture.

- **setStepDuration**(stepDuration: number): void   
Set the text speed.
   - **stepDuration**: The duration of a text update.

- **setText**(text: string): void   
Set the dialog text.
   - **text**: The dialog text.

- **setWidth**(width: number): void   
Set the width of the bubble.
   - **width**: The width in pixels.

- **unfocus**(): void   
Focus off.
Note: It unfocus `menu` too if actions is set.

- **update**(ts: number): void   
The "update" function.
   - **ts**: The timestep.
