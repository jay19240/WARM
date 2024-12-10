# UIMenu

A UI widget displaying a menu with customizable options.
It emit 'E_ITEM_FOCUSED' with data { id, index }
It emit 'E_ITEM_UNFOCUSED'
It emit 'E_ITEM_SELECTED' with data { id, index }
It emit 'E_ITEM_UNSELECTED'
It emit 'E_UNSELECTED'
It emit 'E_CLOSED'
- inherit from: UIWidget
- parent of: UIMenuListView, UIMenuText
## Constructors
- **new UIMenu**(options): UIMenu   
   - **options**: Various options for configuring the behavior of the menu.
## Methods
- **$getViewRectWidget**(index: number)   
   - **index**

- **$handleWidgetClicked**(widget: UIWidget): void   
   - **widget**

- **$handleWidgetHover**(widget: UIWidget): void   
   - **widget**

- **addWidget**(widget: UIWidget, index: number): void   
Add a UI widget item.
   - **widget**: The widget.
   - **index**: The position at which the widget should be inserted in the menu. If no index is
provided (default value is -1), the widget will be added at the end of the menu.

- **clear**(): void   
Remove all widget items.

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **focus**(focusIndex: MenuFocus): void   
Focus on.
   - **focusIndex**: If MenuFocus.AUTO then refocus the child widget too.

- **focusWidget**(index: number, preventScroll: boolean, emit: boolean): void   
Focus on widget item.
It emit an 'E_ITEM_FOCUSED' event.
   - **index**: The index position of the widget.
   - **preventScroll**: Indicating whether to prevent scrolling to the focused widget.
   - **emit**: Determines whether an event should be emitted after focusing the widget.

- **getFocusedWidgetId**()   
Returns the ID of the focused widget, or null if there is no focused widget.

- **getFocusedWidgetIndex**(): number   
Returns the index position of the focused widget item, or -1 if no widget is focused.

- **getSelectedWidgetId**()   
Returns the ID of the first selected widget, or null if no widget is selected.

- **getSelectedWidgetIds**()   
Returns a list of IDs of selected widget items.

- **getSelectedWidgetIndex**(): number   
Returns the index position of the first selected widget item or -1 if no widget is selected.

- **getSelectedWidgetIndexes**()   
Returns a list of index position of selected widget items.

- **getWidget**(index: number): UIWidget   
Returns the widget at the specified index.
   - **index**: The index position of the widget.

- **getWidgets**()   
Returns all widgets.

- **onAction**(actionId: string): void   
The onAction function.
   - **actionId**

- **removeWidget**(index: number): void   
Remove a UI widget item.
   - **index**: The position of the widget.

- **selectWidget**(index: number, emit: boolean): void   
Select a widget item.
It emits an 'E_ITEM_SELECTED' event.
   - **index**: The index position of the widget.
   - **emit**: Determines whether an event should be emitted after selecting the widget.

- **setEnabledWidget**(index: number, enabled: boolean): void   
Set enabled flag of a widget item.
   - **index**: The index position of the widget.
   - **enabled**: Determines whether the widget should be enabled or disabled.

- **setEnabledWidgets**(enabled: boolean): void   
Set the enabled flag of all widget items.
   - **enabled**: Determines whether the widgets should be enabled or disabled.

- **unfocusWidget**(emit: boolean): void   
Focus off widget item (if exist).
It emits an 'E_ITEM_UNFOCUSED' event.
   - **emit**: Determines whether an event should be emitted after unfocusing the widget.

- **unselectWidget**(index: number, emit: boolean): void   
Unselects a widget item.
It emits an 'E_ITEM_UNSELECTED' event.
   - **index**: The index position of the widget.
   - **emit**: Determines whether an event should be emitted after unselecting the widget.

- **unselectWidgets**(emit: boolean): void   
Unselect all widget items.
It emits an 'E_UNSELECTED' event.
   - **emit**: Determines whether an event should be emitted after unselecting all widgets.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
