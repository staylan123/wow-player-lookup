import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Profile } from "../types/types";
import { ClassColors } from "../constants/colors";
import { extractPlayerGear } from "../utils/profile.utils";
import PlayerGear from "./PlayerGear";

const ProfileCard = ({ profile }: { profile: Profile | null }) => {
  if (!profile) return null;

  const playerGear = extractPlayerGear(profile);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex-col gap-8 text-white text-center">
          <Image
            src={profile.thumbnail_url}
            width={150}
            height={150}
            alt="Player Icon"
            className="m-auto shadow-[0px_0px_10px_5px_#8ab6ff]"
          />
          <div className="flex justify-center items-center gap-2 mt-4">
            <Image
              className="object-contain"
              src={
                profile.faction === "alliance" ? "/Alliance.png" : "/Horde.png"
              }
              width={50}
              height={50}
              alt="Faction Icon"
            />
            <h2 className="text-2xl font-bold">{profile.name}</h2>
          </div>
          <p
            className="font-semibold"
            style={{ color: ClassColors[profile.class] }}
          >
            {profile.active_spec_name} {profile.class} (
            {profile.active_spec_role})
          </p>
          <p>
            {profile.race} | {profile.realm} ({profile.region.toUpperCase()})
          </p>
          <p>
            Guild: <span className="text-yellow-500">{profile.guild.name}</span>
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <Image
              className="object-contain"
              src="/AchievementPointLogo.png"
              width={24}
              height={24}
              alt="Achievement Point Icon"
            />
            <p className="font-bold text-yellow-500">
              {profile.achievement_points}
            </p>
          </div>
        </div>
        <hr className="bg-white h-[2px]" />
        <div className="flex flex-col gap-2 text-white">
          <div>
            <PlayerGear
              playerGear={playerGear}
              equippedItemLvl={profile.gear.item_level_equipped}
            />
          </div>
        </div>
        <a
          className="flex items-center gap-1 font-bold bg-orange-700 px-8 py-4 rounded cursor-pointer text-white justify-center"
          href={profile.profile_url}
          target="_blank"
        >
          <FiExternalLink />
          Raider.IO
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
