"use client";
import React, { useState } from "react";
import RealmSelector from "./RealmSelector";
import RegionSelector from "./RegionSelector";
import { RealmOption } from "../types/types";
import useProfileLookUp from "../hooks/useProfileLookUp";
import ProfileCard from "./ProfileCard";
import Loader from "./Loader";
import ProfileNameInput from "./ProfileNameInput";

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
      <div className="md:max-w-[768px] md:m-auto">
        <div className="flex flex-col gap-4 md:justify-center">
          <div>
            <ProfileNameInput profileName={profileName} setProfileName={setProfileName}/>
            <RealmSelector
              selectedRegion={selectedRegion}
              selectedRealm={selectedRealm}
              setSelectedRealm={setSelectedRealm}
            />
          </div>
          <RegionSelector
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
          <button
            className="bg-orange-800 px-4 py-2 rounded cursor-pointer text-white max-w-[320px]"
            onClick={handleSearchProfile}
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-gray-800 border-2 border-white rounded px-4 py-8 mt-4 max-w-[720px] m-auto">
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
