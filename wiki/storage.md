# Storage

This "module" provides functions for saving and syncing data between players.
It is used to store data that needs to be shared between players, such as player stats, inventory, and other game-related information. The data is saved locally and synchronized with the server.

It is recommended to use `createModStorageManager` to create a new instance of the storage manager. And to enable the option `syncCharacters` in `createMod`. This will enable the storage to sync character data between players.

### `createModStorageManager`

Creates a new ModStorageManager instance with the specified default storage.

- `T` is the type of the mod storage.
- `defaultStorage` is the initial data for the storage.

```ts
const storageManager = createModStorageManager<T>(defaultStorage: T);
```

`storageManager` looks like this

```ts
defaultStorage: ModStorage;
save: lodash.DebouncedFunc<() => void>;
clear(): void;
sync(newData: PartialDeep<ModStorage>): void;
syncClients(target?: number): void;
syncCharacter(memberNumber: number, data: PartialDeep<...>): void;
```

The `storageManager.save()` function is debounced, meaning it will only trigger every 5 seconds if called repeatedly by default (adjustable via `SAVE_INTERVAL`). This function saves player data to the server and synchronizes it with other clients.

`storageManager.clear()` clears the storage for the main player. Use carefully.

`storageManager.sync(newData)` Like save but adds new data to the existing user's data. Useful when saving new settings. (might be redundant)

`storageManager.syncClients(target)` syncs the storage with one client. If target is undefined, it syncs with all clients.

`storageManager.syncCharacter(memberNumber, data)` locally synchronizes the data of another player in the room, allowing you to see their data.
