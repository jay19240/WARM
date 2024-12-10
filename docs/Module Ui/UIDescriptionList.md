# UIDescriptionList

A UI widget for displaying a list of items with labels and values.
- inherit from: UIWidget
## Constructors
- **new UIDescriptionList**(): UIDescriptionList   
## Methods
- **addItem**(id: string, label: string, value: string): void   
Add an item.
   - **id**: The unique identifier of the item.
   - **label**: The label or name.
   - **value**: The value.

- **clear**(): void   
Remove all items.

- **getItemValue**(id: string): string   
Returns the value of an item.
   - **id**: The unique identifier of the item.

- **isItemVisible**(id: string): boolean   
Checks if an item is visible.
   - **id**: The unique identifier of the item.

- **removeItem**(id: string): void   
Removes an item.
   - **id**: The unique identifier of the item.

- **setItem**(id: string, value: string): void   
Set the value of an item.
   - **id**: The unique identifier of the item.
   - **value**: The value.

- **setItemVisible**(id: string, visible: boolean): void   
Set the visibility of an item.
   - **id**: The unique identifier of the item.
   - **visible**: Determines whether the item should be visible or hidden.
