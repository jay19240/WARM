# SoundManager

Singleton sound manager.
## Constructors
- **new SoundManager**(): SoundManager   
## Methods
- **deleteSound**(path: string): void   
Deletes a sound if it exists, otherwise it throws an error.
   - **path**: The file path.

- **isMuted**(groupId: string): boolean   
Check if the group is currently muted or not.
   - **groupId**

- **loadSound**(path: string, groupId: string): Promise   
Load asynchronously a sound from a given path and returns it as an `Sound`, caching it for future use.
Note: Use group for categorize your sounds and manage them easily.
   - **path**: The file path.
   - **groupId**: The group identifier.

- **mute**(muted: boolean, groupId: string): void   
Mute or demute a group.
   - **muted**: Determines whether the sounds should be muted or not.
   - **groupId**: The group identifier.

- **pauseSound**(path: string): void   
Pause a sound if it exists, otherwise it throws an error.
   - **path**: The file path.

- **playSound**(path: string, looped: boolean): Promise   
Plays a sound if it exists, otherwise it throws an error.
   - **path**: The file path.
   - **looped**: Determine if sound play in loop or not.

- **releaseSounds**(): void   
Deletes all stored sounds.

- **setVolume**(volume: number, groupId: string): void   
Set the audio volume of a group.
   - **volume**: The desired volume level.
   - **groupId**: The group identifier.
