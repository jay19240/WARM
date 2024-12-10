# UIWidget

UI Widget base element.
It emit 'E_FOCUSED'
It emit 'E_UNFOCUSED'
It emit 'E_ANIMATION_FINISHED'
- parent of: UIBubble, UIDescriptionList, UIDialog, UIInputKeyboard, UIInputSlider, UIMenu, UIMenuTextItem, UIMessage, UIPrint, UIPrompt, UISprite, UIText
## Constructors
- **new UIWidget**(options): UIWidget   
   - **options**: The options like id, class and the most important, template code !
## Methods
- **animate**(animation: string): void   
Trigger animation to the widget root element.
   - **animation**: The name of the animation.

- **appendChild**(child: HTMLElement): void   
Appends a child element to the root of the widget.
   - **child**: The child element.

- **appendStyles**(styles: string): void   
Appends CSS styles to the root of the widget.
   - **styles**: The CSS styles.

- **delete**(): void   
Free all resources.
Warning: You need to call this method to free allocation for this object.

- **focus**(): void   
Focus on.
It set 'u-focused' class to the root of the widget.
It emits a 'E_FOCUSED' event and subscribes to input action event.

- **getId**(): string   
Returns the id.

- **getNode**(): HTMLDivElement   
Returns the root HTMLElement of the widget.

- **getPosition**(): vec2   
Returns the relative x and y coordinates of the widget.

- **getScreenPosition**(): vec2   
Returns the left and top client-coordinates of the widget on the screen.

- **isEnabled**(): boolean   
Checks if widget is enabled or not.

- **isFocused**(): boolean   
Checks if widget is focused.

- **isSelected**(): boolean   
Checks if widget is selected or not.

- **isVisible**(): boolean   
Checks if the widget is visible.

- **onAction**(actionId: string): void   
Virtual method that is called when input action event is emitted.
   - **actionId**: The action identifier.

- **removeChild**(index: number): void   
Removes a child element from the root of the widget.
   - **index**: The position of the child element.

- **setEnabled**(enabled: boolean): void   
Set the enabled state flag.
It toggle the 'u-disabled' class to the root of the widget.
   - **enabled**: Determines whether the widget is enabled or disabled.

- **setId**(id: string): void   
Set the id value.
   - **id**: The unique identifier of a widget.

- **setPosition**(x: number, y: number): void   
Set the left and top position to the widget.
Note: Works only if position is absolute.
   - **x**: The horizontal position of the element on the page.
   - **y**: The vertical position of the element on the page.

- **setSelected**(selected: boolean): void   
Set the selected state flag.
It toggle the 'u-selected' class to the root of the widget.
   - **selected**: Indicates whether the element should be selected or not.

- **setVisible**(visible: boolean): void   
Set the visibility state.
It toggle the `u-hidden` class to the root of the widget.
   - **visible**: Determines whether the element should be visible or hidden.

- **unfocus**(): void   
Focus off.
It unset 'u-focused' class to the root of the widget.
It emits an 'E_UNFOCUSED' event and unsubscribes the inputManager from input action event.

- **update**(ts: number): void   
Virtual update function.
   - **ts**: The timestep.
