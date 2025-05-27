import { PlayerGearSlotLabels } from "../constants/gear";
import { Profile } from "../types/types";

export type PlayerGearData = {
  item_level: number,
  item_quality: number,
  name: string,
  slotLabel: string
}

export type PlayerGearCollection= { [key: string] : PlayerGearData }

export const extractPlayerGear = (profile: Profile) : PlayerGearCollection => {
  const { gear } = profile;
  const items = gear.items;
  const playerGear : Partial<PlayerGearCollection> = {};

  for (const slot in items) {
    const key = slot as keyof typeof items
    const gear = items[key];

    playerGear[key] = {
      item_level: gear.item_level,
      item_quality: gear.item_quality,
      name: gear.name,
      slotLabel: PlayerGearSlotLabels[key]
    };
  }

  return playerGear as PlayerGearCollection;
};
