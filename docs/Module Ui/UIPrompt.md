# UIPrompt

A UI widget displaying prompt with a text content and a menu of actions.
It emit 'E_ITEM_SELECTED' with data { id, index }
- inherit from: UIWidget
## Constructors
- **new UIPrompt**(): UIPrompt   
## Methods
- **$handleMenuItemSelected**(data: any): void   
   - **data**

- **addAction**(id: string, text: string): void   
Add a new menu button.
   - **id**: The unique identifier.
   - **text**: The text or label.

- **clearActions**(): void   
Remove all menu buttons.

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **focus**(): void   
Focus on.

- **removeAction**(id: string): void   
Remove a menu button.
   - **id**: The unique identifier.

- **setText**(text: string): void   
Set the text message.
   - **text**: The text content.

- **unfocus**(): void   
Focus off.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
