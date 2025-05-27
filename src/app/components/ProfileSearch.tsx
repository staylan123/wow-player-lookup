"use client";
import React, { useState } from "react";
import RealmSelector from "./RealmSelector";
import RegionSelector from "./RegionSelector";
import { RealmOption } from "../types/types";
import useProfileLookUp from "../hooks/useProfileLookUp";
import ProfileCard from "./ProfileCard";
import Loader from "./Loader";

const ProfileSearch = () => {
  const [profileName, setProfileName] = useState<string>("Vylraya");
  const [selectedRegion, setSelectedRegion] = useState<string>("us");
  const [selectedRealm, setSelectedRealm] = useState<RealmOption>({
    label: "Moon Guard",
    value: "moon-guard",
  });

  const { profile, loading, error, handleSearchProfile } = useProfileLookUp({
    profileName,
    selectedRegion,
    selectedRealm,
  });

  return (
    <div className="mt-8">
      <div className="max-w-[400px]">
        <div className="flex flex-col gap-4">
          <>
            <label className="font-semibold text-white" htmlFor="playerName">
              Player Name:
            </label>
            <input
              className="border-black border-1 flex-2/5 bg-white p-2"
              type="text"
              placeholder="Enter Player Name"
              id="playerName"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
            />
          </>
          <RealmSelector
            selectedRegion={selectedRegion}
            selectedRealm={selectedRealm}
            setSelectedRealm={setSelectedRealm}
          />
          <RegionSelector
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
          <button
            className="bg-orange-800 px-4 py-2 rounded cursor-pointer max-w-[400px] text-white"
            onClick={handleSearchProfile}
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-gray-800 border-2 border-white rounded px-4 py-8 mt-4 max-w-[600px]">
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-center text-white">{error.message}</p>
        ) : (
          <ProfileCard profile={profile} />
        )}
      </div>
    </div>
  );
};

export default ProfileSearch;
