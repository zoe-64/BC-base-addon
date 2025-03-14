### Start

```ts
npm install libmykitty
// or
yarn add libmykitty
// or
pnpm add libmykitty
```

This is _recommended_ but not necessary.

```ts
npm install bc-stubs --save-dev
// or
yarn add -D bc-stubs
// or
pnpm add -D bc-stubs
```

in your `tsconfig.json` if you are using `bc-stubs`

```json
"include": ["node_modules/bc-stubs/bc/**/*.d.ts", "./src/**/*"]
```

#### Step 1 - Initialize before login

`createMod` is basically a wrapper of `bcModSdk.registerMod`. This enables my kitty to know about your mod. It also gives it the information about your mod name and your version so it can quickstart the features it provides. Such as storage and sending data between players.

```ts
export const bcModSDK = createMod({ name: "bondageKitties", fullName: "bondage kitties", version: "1.1.0" }, { syncCharacters: true });
```

#### Step 2 - Login

This makes init execute when the user is logged in. This is very useful because it makes sure `Player` is always defined.

```ts
AtLogin(init);

function init() {
  console.log(Player.Money);
}
```

#### Step 3 - Storage

This sets up the storage for your mod. It automatically syncs the mod data between players.</br>
It can be accessed through `Player[MOD_NAME]`</br>
Storage doesn't get automatically updated when you change something in `Player[MOD_NAME]` to do that you'll have to call `storageManager.save()`

```ts
type ModStorage = {
  bongos: number;
  version: string;
};

const DEFAULT_STORAGE = {
  bongos: 0,
  version: VERSION,
};
function init() {
  const storageManager = CreateModStorageManager<ModStorage>(DEFAULT_STORAGE);
}
```

#### 4. Listeners

My kitty offers event listening capabilities. By default, there are no listeners. However, creating a ModStorageManager automatically adds two listeners: one for when a player joins and another for when a player updates their data for others.

This is how you can make your own listener and add functionality when the listener is triggered.

```ts
declare module "libmykitty" {
  interface Events {
    pats: { isHeadPat: boolean };
  }
}
registerModListener("OnHeadPats", (message: AddonServerChatRoomMessage, { isHeadPat }) => {
  if (isHeadPat) {
    console.log("AWOOOGAH!");
  }
  console.log("awooo!");
});

function sendPats() {
  sendModEvent("pats", { isHeadPat: true });
}
(<any>window).sendPats = sendPats;
```

If sendPats then everyone in the chatroom with the mod would have "AWOOOGAH!" printed in the console except the sender. By specifying the target parameter, you can make the message only go to a specific player.
