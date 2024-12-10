# UIManager

Singleton UI manager.
It emit 'E_FOCUSED' with data { widget }
It emit 'E_UNFOCUSED'
## Constructors
- **new UIManager**(): UIManager   
## Methods
- **addNode**(node: HTMLElement, styles: string): void   
Appends an HTML element to the root element.
   - **node**: The HTML element.
   - **styles**: The CSS styles that you want to apply to the node.

- **addWidget**(widget: UIWidget, styles: string): UIWidget   
Add a widget and returns it.
   - **widget**: The widget.
   - **styles**: The CSS styles to be applied to the widget.

- **clear**(): void   
Remove all nodes and widgets.

- **enableOverlayer**(enable: boolean): void   
Enable the overlayer.
   - **enable**: Indicating whether to enable or disable the overlayer.

- **fadeIn**(delay: number, ms: number, color: string, transitionTimingFunction: string, cb: Function): void   
Fade in the screen.
   - **delay**: The amount of time to wait before starting the fade-in (in milliseconds).
   - **ms**: The duration of the fade-in (in milliseconds).
   - **color**: The fade-in color.
   - **transitionTimingFunction**: Determines how the intermediate values are calculated during the transition.
   - **cb**: The callback function that will be executed after the fade-in is complete.

- **fadeOut**(delay: number, ms: number, transitionTimingFunction: string, cb: Function): void   
Fade out the screen.
   - **delay**: The amount of time to wait before starting the fade-out (in milliseconds).
   - **ms**: The duration of the fade-out (in milliseconds).
   - **transitionTimingFunction**: Determines how the intermediate values are calculated during the transition.
   - **cb**: The callback function that will be executed after the fade-out is complete.

- **focus**(widget: UIWidget): void   
Give the focuses to a widget and unfocuses the currently focused (if any).
It emit 'E_FOCUSED' event.
   - **widget**: The widget.

- **getWidgets**()   
Returns all widgets.

- **removeNode**(node: HTMLElement): void   
Removes an HTML element from the root element.
   - **node**: The HTML element.

- **removeWidget**(widget: UIWidget): boolean   
Removes a widget.
   - **widget**: The  widget.

- **setClassName**(className: string): void   
Set class to the root ui element.
   - **className**: The list of classes.

- **unfocus**(): void   
Remove focus from the currently focused widget (if any).
It emit 'E_UNFOCUSED' event.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
