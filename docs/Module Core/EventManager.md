# EventManager

Singleton managing subscribing to and emitting events.
## Constructors
- **new EventManager**(): EventManager   
## Methods
- **emit**(emitter: any, type: string, data: any): Promise   
Notifies subscribers of an event and returns a promise that resolves when all subscriber callbacks have been executed.
   - **emitter**: Is an object that emits events. It could be any object.
   - **type**: The event type name.
   - **data**: Custom data that will be passed to the callback function of each subscriber.

- **subscribe**(emitter: any, type: string, listener: any, cb: Function): void   
Adds a new subscriber.
   - **emitter**: Is an object that emits events. It could be any object.
   - **type**: The event type name.
   - **listener**: Is the object that is subscribed to the event and usually the context of the callback function.
   - **cb**: Is a callback function that will be executed when the event is triggered.

- **subscribeOnce**(emitter: any, type: string, listener: any, cb: Function): void   
Adds a new subscriber and delete self after the first event trigger.
   - **emitter**: Is an object that emits events. It could be any object.
   - **type**: The event type name.
   - **listener**: Is the object that is subscribed to the event and usually the context of the callback function.
   - **cb**: Is a callback function that will be executed when the event is triggered.

- **unsubscribe**(emitter: any, type: string, listener: any): void   
Removes a specific subscriber for a given emitter, event type and listener.
   - **emitter**: Is an object that emits events. It could be any object.
   - **type**: The event type name.
   - **listener**: Is the object that is subscribed to the event and usually the context of the callback function.

- **unsubscribeAll**(): void   
Remove all subscribers.

- **wait**(emitter: any, type: string): Promise   
Returns a promise that resolves when a specific event is emitted.
   - **emitter**: Is an object that emits events. It could be any object.
   - **type**: The event type name.
