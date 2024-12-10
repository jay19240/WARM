# UIMenuListView

A UI widget displaying a menu that make update automatically when a datasource changed.
Note: It send same event than UIMenu.
- inherit from: UIMenu
## Constructors
- **new UIMenuListView**(options): UIMenuListView   
   - **options**: Various options for configuring the behavior of the menu.
## Methods
- **$handleItemAdded**(data: any): void   
   - **data**

- **$handleItemRemoved**(data: any): void   
   - **data**

- **addItem**(item: T, enabled: boolean, index: number): void   
Virtual method called when data is added to the collection.
Usually, it create the wanted widget item and add it to the menu.
Warning: please don't forget to overwrite this method otherwise list-view will stay empty ;)
   - **item**: The added item coming from the data-source collection.
   - **enabled**: Determines whether the item should be enabled or disabled.
   - **index**: The index position at which the item should be added in the list.

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **getFocusedItem**(): T   
Returns the focused data item.

- **getSelectedItem**(): T   
Returns the selected data item.

- **getViews**()   
Returns the list of displayed item data (called as "views").

- **setCollection**(collection: ArrayCollection): void   
Set a data-source collection.
   - **collection**: The data-source collection.

- **setEnablePredicate**(enablePredicate): void   
Set a enable predicate.
   - **enablePredicate**: Determine whether an item should be enabled or disabled.

- **setFilterPredicate**(filterPredicate): void   
Set a filter predicate.
   - **filterPredicate**: Determine whether an item should be included in the filtered views or not.

- **setSortPredicate**(sortPredicate): void   
Set the sort predicate.
   - **sortPredicate**: Determine the sorting order of the items in the list-view.
