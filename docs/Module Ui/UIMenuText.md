# UIMenuText

A UI widget displaying a simple text menu.
It send same events as UIMenu.
- inherit from: UIMenu
## Constructors
- **new UIMenuText**(options): UIMenuText   
   - **options**: Various options for configuring the behavior of the menu.
## Methods
- **add**(id: string, text: string): void   
Add text item.
   - **id**: The unique identifier of the item.
   - **text**: The text content.

- **getSelectedId**()   
Returns the selected widget ID as a string or null.

- **remove**(id: string): void   
Removes an item.
   - **id**: The unique identifier of the item.

- **set**(id: string, text: string): void   
Set the text of a menu item.
   - **id**: The unique identifier of the item.
   - **text**: The text content.
