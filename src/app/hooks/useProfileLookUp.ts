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

  const url = `https://raider.io/api/v1/characters/profile?region=${selectedRegion}&realm=${selectedRealm.value}&name=${profileName}&fields=gear,guild`;

  const handleSearchProfile = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const error = await response.json()
        console.log(error)
        setError(error)
      }

      const playerData = await response.json();
      setProfile(playerData);
      setError(null);
    } catch (error) {
      console.error(error);
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
