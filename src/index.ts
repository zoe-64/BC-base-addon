import { waitFor } from "./utils/general";

// thanks Estsanatlehi
export async function AtLogin(callback: () => void): Promise<void> {
  await waitFor(() => Player && Player.CharacterID !== "");
  callback();
}
