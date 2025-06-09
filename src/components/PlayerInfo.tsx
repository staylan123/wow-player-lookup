import { ClassColors } from "../constants/colors";
import { Profile } from "../types/types";
import { FiExternalLink } from "react-icons/fi";

const PlayerInfo = ({ profile }: { profile: Profile }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center md:text-start md:gap-8 md:flex-row">
      <img
        src={profile.thumbnail_url}
        width={150}
        height={150}
        alt="Player Icon"
        className="shadow-[0px_0px_10px_5px_#8ab6ff]"
      />
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-2">
          <img
            className="object-contain"
            src={
              profile.faction === "alliance" ? "/Alliance.png" : "/Horde.png"
            }
            width={50}
            height={50}
            alt="Faction Icon"
          />
          <h2 className="text-white text-bold text-2xl font-bold">
            {profile.name}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="object-contain"
            src='/AchievementPointLogo.png'
            width={24}
            height={24}
            alt="Achievement Icon"
          />
          <p className="text-yellow-500 text-bold font-bold">
            {profile.achievement_points}
          </p>
        </div>
        <div className="font-semi-bold text-white">
          <p
            className="font-bold"
            style={{ color: ClassColors[profile.class] }}
          >
            {profile.active_spec_name} {profile.class} (
            {profile.active_spec_role})
          </p>
          <p>
            {profile.race} | {profile.realm} ({profile.region.toUpperCase()})
          </p>
          <p>&lt;{profile.guild.name}&gt;</p>
          <a href={profile.profile_url} target="_blank" className="flex items-center gap-2 text-orange-500 underline justify-center cursor md:justify-start"><FiExternalLink /> Raider.IO Profile</a>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
