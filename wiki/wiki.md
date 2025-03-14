# LibMyKitty

### `createMod`

The magic that brings your mod to life! `createMod` is a wrapper around `bcModSdk.registerMod` that not only registers your mod but also tells My Kitty about your mod's name and version.</br>
Without this function, My Kitty wouldn't know about your mod and wouldn't be able to do anything with it. </br>So make sure to call this function at the beginning of your mod's code!</br>
The options object can have the following properties:

- `syncCharacters`: Whether to sync character data between players.

### `AtLogin`

Runs a function when the player is logged in.

```ts
AtLogin(callback: () => void)
```

Check out [Quickstart.md](quickstart.md) for more information on how to get started.

## Modules

- ## [storage](storage.md)
- ## [events & listeners](events&listeners.md)
- ## [webhooks](webhooks.md)
- ## [activities](activities.md)

## Misc

### `getCharacter`

Returns the character object for the specified identifier. If the identifier is not found, it returns undefined. Only works within rooms.

```ts
getCharacter(identifier: string | number | Character): Character | undefined
```

### `isAddonPlayer`

Returns true if the character is using your mod and false otherwise. It also checks if the version of the mod matches the version specified in the character's data. If no version is specified, it uses the version stored in the mod's data.

```ts
isAddonPlayer(character: Character, version = Player[MOD_NAME].version): boolean
```

### `waitFor` and `waitForElement`

These two functions are used to wait for something to happen before continuing.

`waitFor` takes a function that returns a boolean and an optional cancel function. It will keep calling the function until it returns true, or until the cancel function returns true. It will wait 10 milliseconds between each call.

`waitForElement` takes a CSS selector and optional options. It will wait until an element with that selector is found in the DOM. If the element is found, it will return the element. If the timeout is reached without finding the element, it will return false. The options object can have the following properties:

- `childCheck`: If true, the function will only return true if the element has children.
- `timeout`: The timeout in milliseconds. If not specified, it will default to 10000 milliseconds.

Example:

```ts
const element = await waitForElement("#myElement", { childCheck: true, timeout: 5000 });

if (element) {
  console.log("Element found!");
}
```

and

```ts
await waitFor(() => CurrentScreen === "ChatRoom");

console.log("In Chatroom");
```

[Back to top](#libmykitty)
