# UIInputSlider

A UI widget displaying a slider input.
It emit 'E_VALUE_CHANGED' with data { value }
- inherit from: UIWidget
## Constructors
- **new UIInputSlider**(): UIInputSlider   
## Methods
- **onAction**(actionId: string): void   
The onAction function.
It emits an 'E_VALUE_CHANGED' event if the action is 'LEFT' or 'RIGHT'.
   - **actionId**

- **setMax**(max: number): void   
Set the maximum value for the range input.
   - **max**: The maximum value.

- **setMin**(min: number): void   
Set the minimum value for the range input.
   - **min**: The minimum value.

- **setStep**(step: number): void   
Set the step value.
   - **step**: The increment or decrement value for the range input.

- **setValue**(value: number): void   
Set the input value.
   - **value**: The value.
