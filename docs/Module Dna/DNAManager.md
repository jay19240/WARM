# DNAManager

Singleton pure ECS manager.
## Constructors
- **new DNAManager**(): DNAManager   
## Methods
- **addComponent**(eid: number, component: DNAComponent): void   
Adds component to an entity.
   - **eid**: The entity's id.
   - **component**: The component.

- **createEntity**(): number   
Creates a new entity and returns its uid.

- **draw**(): void   
The draw function.

- **findEntities**(componentTypeName: string)   
Find entities having that component.
   - **componentTypeName**: The component typename.

- **findEntity**(componentTypeName: string): number   
Find the first entity having that component. If no match is found, it returns -1.
   - **componentTypeName**: The component typename.

- **findSystems**(tag: string)   
Returns all systems that have specific tag.
   - **tag**: The tag to search.

- **getComponent**(eid: number, typename: string): DNAComponent   
Returns component from an entity.
   - **eid**: The entity's id.
   - **typename**: The component typename.

- **getComponents**(eid: number): Map   
Returns all components from an entity.
   - **eid**: The entity's id.

- **getSystems**()   
Returns the list of systems.

- **hasComponent**(eid: number, typename: string): boolean   
Check if an entity has a specific component.
   - **eid**: The entity's id.
   - **typename**: The component typename.

- **hasEntity**(id: number): boolean   
Checks if an entity exists.
   - **id**: The entity's id.

- **removeComponent**(eid: number, typename: string): void   
Removes component to an entity.
   - **eid**: The entity's id.
   - **typename**: The component typename.

- **removeComponentIfExist**(eid: number, typename: string): boolean   
Removes a component from an entity if it exists and returns true, otherwise it returns false.
   - **eid**: The entity's id.
   - **typename**: The component typename.

- **removeEntity**(eid: number): void   
Removes entity.
   - **eid**: The entity's id.

- **reset**(): void   
Resets all.

- **setup**(systems: DNASystem[]): void   
Setup your systems here.
   - **systems**: A list of systems.

- **update**(ts: number): void   
The update function.
   - **ts**: The timestep.
