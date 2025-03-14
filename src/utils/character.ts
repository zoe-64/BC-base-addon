// https://github.com/FurryZoi/Littlish-Club/blob/ed3f0ce0533473b6c2505500198c67d812df6b17/src/utils/characters.ts#L1

import { MOD_NAME, type StorageModel } from "@/modules/storage";

export function getStorage(character: Character): StorageModel | undefined {
  // @ts-expect-error
  return character[MOD_NAME];
}

export function setStorage(character: Character, data: StorageModel): void {
  // @ts-expect-error
  character[MOD_NAME] = data;
}

// Thanks Zoi
export function getCharacter(identifier: string | number | Character): Character | undefined {
  if (!identifier) return;
  if (typeof identifier === "object") return identifier;
  return ChatRoomCharacter.find((character) => {
    return character.MemberNumber === identifier || character.Name.toLowerCase() === identifier || character.Nickname?.toLowerCase() === identifier;
  });
}

export function isAddonPlayer(character: Character, version = getStorage(Player)?.version): boolean {
  return Boolean(getStorage(character)?.version === version);
}
