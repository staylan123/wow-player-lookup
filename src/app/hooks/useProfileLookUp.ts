import { useEffect, useState } from "react";
import { Profile, RealmOption } from "../types/types";

type ProfileLooKUpProps = {
  profileName: string;
  selectedRealm: RealmOption;
  selectedRegion: string;
};

const useProfileLookUp = ({ profileName, selectedRealm, selectedRegion }: ProfileLooKUpProps) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const url = `https://raider.io/api/v1/characters/profile?region=${selectedRegion}&realm=${selectedRealm.value}&name=${profileName}&fields=gear,talents,guild,covenant`;

  const handleSearchProfile = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("ERROR");
      }

      const playerData = await response.json();
      setProfile(playerData);
      setError(null);
    } catch (error: any) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    handleSearchProfile,
  };
};

export default useProfileLookUp;
