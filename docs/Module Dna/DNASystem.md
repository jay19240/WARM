# DNASystem

A system in a pure ECS data-driven implementation.
## Constructors
- **new DNASystem**(tags: never[]): DNASystem   
   - **tags**: A list of tags.
## Methods
- **action**(actionId: string): void   
Call "onAction" for each entity (for internal use).
   - **actionId**: The identifier of the action (see input_manager).

- **actionOnce**(actionId: string): void   
Call "onActionOnce" for each entity (for internal use).
   - **actionId**: The identifier of the action (see input_manager).

- **addRequiredComponentTypename**(typename: string): void   
Adds a component requirements.
When you add a component to an entity, the manager will automatically bind this entity to systems that match these components list.
   - **typename**: The component typename.

- **bindEntity**(eid: number): void   
Add entity to the system.
   - **eid**: The entity's id.

- **draw**(): void   
The draw function.

- **getTags**()   
Returns the list of tags.

- **hasEntity**(eid: number): boolean   
Checks if a given entity exists in the system.
   - **eid**: The entity's id.

- **hasTag**(tag: string): boolean   
Checks if system has the given tag.
   - **tag**: The tag.

- **isMatchingComponentRequirements**(components: IterableIterator): boolean   
Checks if a given set of components matches the system component requirements.
   - **components**: A list of component.

- **onAction**(actionId: string, eid: number): void   
Virtual method that is called when an action occurs.
   - **actionId**: The identifier of the action (see input_manager).
   - **eid**: The entity's id.

- **onActionOnce**(actionId: string, eid: number): void   
Virtual method that is called when a specific action occurs once.
   - **actionId**: The identifier of the action (see input_manager).
   - **eid**: The entity's id.

- **onAfterUpdate**(ts: number): void   
Virtual method that is called after the entities update phase.
   - **ts**: The timestep.

- **onBeforeUpdate**(ts: number): void   
Virtual method that is called before the entities update phase.
   - **ts**: The timestep.

- **onEntityBind**(eid: number): void   
Virtual method that is called during entity binding.
   - **eid**: The entity's id.

- **onEntityDraw**(eid: number): void   
Virtual method that is called for each entity during the draw phase.
   - **eid**: The entity's id.

- **onEntityUnbind**(eid: number): void   
Virtual method that is called during entity unbinding.
   - **eid**: The entity's id.

- **onEntityUpdate**(ts: number, eid: number): void   
Virtual method that is called for each entity during the update phase.
   - **ts**: The timestep.
   - **eid**: The entity's id.

- **pause**(): void   
Make the update loop paused.

- **resume**(): void   
Make the update loop running.

- **unbindEntity**(eid: number): void   
Remove entity from the system.
   - **eid**: The entity's id.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
