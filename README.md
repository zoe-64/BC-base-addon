${{\color{HotPink}\Large{\textsf{LibMyKitty}}}}$

It gives you a quick setup, so you don't have to start completely from scratch.</br>
Think of it like an outline, it's there to help you get started a little faster.</br>
It's a great way to get building your own addon.

### Installation

```ts
npm install libmykitty
// or
yarn add libmykitty
// or
pnpm add libmykitty
```

LibMyKitty provides a set of tools to help mod developers create and manage their modifications. Here's a summary of its key features:

- **Mod Initialization:** The `createMod` function allows developers to easily register their mod with the game, ensuring it's recognized and can function correctly. Without needing to install the bondage-club-mod-sdk.

- **Event Handling:** Functions like `AtLogin` enable developers to execute code when specific events occur, such as when a player logs in.
- **Communication:** The library provides sending data between players and the server through functions like `sendModEvent` and `registerModListener`, allowing for the exchange of custom messages.
- **Data Management:** The `createModStorageManager` tool provides a structured way to store and manage mod data, including saving and synchronizing information.
- **Error Reporting:** The `CreateWebhook` feature allows developers to receive error notifications, which can help in identifying and fixing issues.
- **Character Interaction:** Functions like `getCharacter` and `isAddonPlayer` provide ways to interact with and identify characters within the game environment.
- **Asynchronous Operations:** The `waitFor` and `waitForElement` functions allow developers to pause code execution until certain conditions are met, ensuring smooth gameplay.

View [Quickstart.md](wiki/quickstart.md) for more information on how to get started.

If you are looking for something more documented, check out [wiki/Wiki.md]()
