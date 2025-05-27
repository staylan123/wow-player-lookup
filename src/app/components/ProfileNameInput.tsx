import React, { Dispatch, SetStateAction } from "react";

type ProfileNameInputProps = {
  profileName: string;
  setProfileName: Dispatch<SetStateAction<string>>;
};

const ProfileNameInput = ({
  profileName,
  setProfileName,
}: ProfileNameInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold text-white" htmlFor="playerName">
        Player Name:
      </label>
      <input
        className="border-black border-1 bg-white p-2"
        type="text"
        placeholder="Enter Player Name"
        id="playerName"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
      />
    </div>
  );
};

export default ProfileNameInput;
