# ArrayCollection

Generic class that represents a collection of items and provides event-based features.
## Constructors
- **new ArrayCollection**(items: T[]): ArrayCollection   
   - **items**: The `items` underlying collection's data.
## Methods
- **clear**(): void   
Removes all items.

- **getItems**()   
Returns items.

- **has**(item: T): boolean   
Checks if an item is present in the collection.
   - **item**: The item.

- **pop**(emit: boolean)   
Remove and returns the last item.
   - **emit**: If `emit` is set to `true`, an event with the name 'E_ITEM_REMOVED' will be emitted.

- **push**(item: T, emit: boolean): number   
Adds an item.
   - **item**: The item.
   - **emit**: If `emit` is set to `true`, an event with the name 'E_ITEM_ADDED' will be emitted.

- **remove**(item: T, emit: boolean): number   
Removes an item and returns its index.
   - **item**: The item.
   - **emit**: If `emit` is set to `true`, an event with the name 'E_ITEM_REMOVED' will be emitted.

- **removeAt**(index: number, emit: boolean): T   
Removes an item at a specified index and returns the removed item.
   - **index**: The index.
   - **emit**: If `emit` is set to `true`, an event with the name 'E_ITEM_REMOVED' will be emitted.
