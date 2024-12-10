# AIMinMaxTreeAbstract

The MinMax node abstract class.
- parent of: AIMinMaxLeaf, AIMinMaxNode
## Constructors
- **new AIMinMaxTreeAbstract**(): AIMinMaxTreeAbstract   
## Methods
- **getData**(): any   
Return the custom data.

- **getValue**(): number   
Get the score value.

- **isVisited**(): boolean   
Return the visited flag (only for internal use)

- **setData**(data: any): void   
Set some custom data associate with the node. The function `setData` in TypeScript sets the value of a variable `data` to the provided input.
   - **data**: The custom data object.

- **setValue**(value: number): void   
Set the score value.
   - **value**: The score value.

- **setVisited**(visited: boolean): void   
Set the visited flag (only for internal use).
   - **visited**: The visited flag.
