# CoreManager

Singleton core manager.
Used to set the size and resolution of the top-level HTMLElement container.
It emit 'E_RESIZE'
## Constructors
- **new CoreManager**(): CoreManager   
## Methods
- **addClass**(className: string): void   
Adds a class to the container element.
   - **className**: The class name.

- **enableScanlines**(enabled: boolean): void   
Enable scanlines.
   - **enabled**: Indicating whether scanlines should be enabled or disable.

- **getResolution**(): vec2   
Returns the resolution size.

- **getSize**(): vec2   
Returns the client-width and client-height of the container element.

- **removeClass**(className: string): void   
Removes a class from the container element.
   - **className**: The class name.

- **setSize**(resWidth: number, resHeight: number, sizeMode: SizeMode): void   
Set the size strategy of the container. It emit a 'E_RESIZE' event.
   - **resWidth**: The width of the container in pixels.
   - **resHeight**: The height of the container in pixels.
   - **sizeMode**: Determines how the container fit the browser window (in some cases, there is desynchro between container size and resolution size).

- **toggleClass**(className: string): void   
Toggles the presence of a class on the container element.
   - **className**: The class name.
