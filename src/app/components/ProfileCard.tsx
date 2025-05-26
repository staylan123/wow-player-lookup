import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Profile } from "../types/types";
import { ClassColors } from "../constants/colors";
import { extractPlayerGear } from "../utils/profile.utils";

const ProfileCard = ({ profile }: { profile: Profile | null }) => {
  if (!profile) return null;
  console.log(extractPlayerGear(profile))
  return (
    <div className="bg-black border-2 border-white rounded px-4 py-8 mt-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex-col gap-4">
          <Image
            src={profile.thumbnail_url}
            width={150}
            height={150}
            alt="Player Icon"
            className="margin-auto"
          />
          <div className="text-white">
            <div className="flex items-center gap-2">
              <Image
                className="object-contain"
                src={
                  profile.faction === "alliance"
                    ? "/Alliance.png"
                    : "/Horde.png"
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
            <div>
              <p>Achievement Points: {profile.achievement_points}</p>
              <p>Race: {profile.race}</p>
              <p>
                {profile.realm} ({profile.region.toUpperCase()})
              </p>
            </div>
          </div>
        </div>
        <a
          className="flex items-center gap-1 font-bold bg-orange-700 px-8  py-4 rounded cursor-pointer text-white"
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
