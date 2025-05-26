import { PlayerGearSlots, Profile } from "../types/types";

export const extractPlayerGear = (profile: Profile) => {
  if (!profile) return null;

  const { gear } = profile;
  const items = gear.items as any;
  const playerGear = {} as any;

  for (const slot in items) {
    const gear = items[slot];

    playerGear[slot] = {
      is_legendary: gear.is_legendary,
      item_level: gear.item_level,
      item_quality: gear.item_quality,
      name: gear.name,
    };
  }

  return playerGear;
};
