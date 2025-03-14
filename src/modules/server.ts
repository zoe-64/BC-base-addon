import { type UnverifiedServerChatRoomMessage, type AddonServerChatRoomMessage } from "@/types/types";
import { MOD_NAME, type StorageModel } from "./storage";
export interface Events {
  syncCharacter: StorageModel;
  syncJoin: StorageModel;
}
export const HookPriority = {
  OBSERVE: 0,
  ADD_BEHAVIOR: 1,
  MODIFY_BEHAVIOR: 5,
  OVERRIDE_BEHAVIOR: 10,
  TOP: 100,
};

export function sendModEvent<T extends keyof Events>(type: T, data?: Events[T], target?: number) {
  const ChatRoomMessage: UnverifiedServerChatRoomMessage = {
    Type: "Hidden",
    Content: `${MOD_NAME}Msg`,
    Sender: Player.MemberNumber,
    Target: target,
    Dictionary: [
      {
        type: type,
        data: data,
      },
    ],
  };
  ServerSend("ChatRoomChat", ChatRoomMessage as ServerChatRoomMessage);
}
type EventListeners = {
  [K in keyof Events]: (message: AddonServerChatRoomMessage, data: Events[K]) => void;
};

const modListeners = new Map<keyof Events, EventListeners[keyof Events]>();

export function registerModListener<T extends keyof Events>(type: T, callback: EventListeners[T]) {
  modListeners.set(type, callback);
}

export function unregisterModListener<T extends keyof Events>(type: T) {
  modListeners.delete(type);
}
export function receivePacket(message: UnverifiedServerChatRoomMessage) {
  const received = isModMessage(message);
  if (!received) return;

  const type = message.Dictionary[0]!.type;
  const data = message.Dictionary[0]!.data;
  for (const [key, modListener] of [...modListeners]) {
    if (key === type) {
      modListener(message, data);
    }
  }
}

export function isModMessage(message: UnverifiedServerChatRoomMessage): message is AddonServerChatRoomMessage {
  return (
    message?.Content === `${MOD_NAME}Msg` &&
    message.Sender &&
    message.Sender !== Player.MemberNumber &&
    message.Dictionary &&
    message.Dictionary[0]?.data &&
    message.Type === "Hidden"
  );
}
