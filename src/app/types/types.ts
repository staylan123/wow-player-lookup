export type RealmOption = {
  label: string;
  value: string;
};

export type RegionOption = {
  label: string;
  value: string;
  flagPath: string;
};

export type Profile = {
  achievement_points: number;
  active_spec_name: string;
  active_spec_role: string;
  class: string;
  faction: string;
  gear: PlayerGear;
  guild: {
    name: string
  }
  last_crawled_at: string;
  name: string;
  profile_banner: string;
  profile_url: string;
  race: string;
  realm: string;
  region: string;
  thumbnail_url: string;
};

export type PlayerGear = {
  created_at: string;
  item_level_equipped: number;
  items: {
    [key in PlayerGearSlots]: Gear;
  };
};

export type PlayerGearSlots =
  | "back"
  | "chest"
  | "feet"
  | "finger1"
  | "finger2"
  | "hands"
  | "head"
  | "legs"
  | "mainhand"
  | "offhand"
  | "shirt"
  | "shoulder"
  | "trinket1"
  | "trinket2"
  | "waist"
  | "wrist";

export type Gear = {
  item_level: number;
  item_quality: number;
  name: string;
};
