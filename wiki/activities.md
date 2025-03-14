# Activities

Activities are a type of activity that can be performed on a character or on yourself.
Then you can register activities using the `registerActivity` function.

```ts
registerActivity({
  ID: "activity_id",
  Name: "Activity Name",
  Image: "https://example.com/image.png",
  OnClick: (player, group) => {
    // this is what happens when you click the activity, player is the targeted player. group is the item group that the activity happens on.
  },
  Target: ["ItemArms", "ItemLegs", "ItemTorso"],
  Criteria: (player) => {
    // this is where you check, hmm is this activity possible, like looking if they are holding a specific item or if they are naked, player is the targeted player. Return true to show, false for hide.
    return true;
  },
});
```

You can also register activities that happen on yourself using the `TargetSelf` property. It means that the user can only perform this activity on themselves.
