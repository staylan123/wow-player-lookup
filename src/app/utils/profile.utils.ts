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
  const items = gear.items as any;
  const playerGear = {} as any;

  for (const slot in items) {
    const gear = items[slot];

    playerGear[slot] = {
      item_level: gear.item_level,
      item_quality: gear.item_quality,
      name: gear.name,
      slotLabel: PlayerGearSlotLabels[slot]
    };
  }

  return playerGear;
};
