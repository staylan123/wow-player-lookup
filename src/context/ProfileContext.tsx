import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
  useContext,
} from "react";
import { Profile, RealmOption } from "../types/types";
import useProfileLookUp from "../hooks/useProfileLookUp";

type ProfileContextType = {
  profileName: string;
  setProfileName: Dispatch<SetStateAction<string>>;
  selectedRealm: RealmOption;
  setSelectedRealm: Dispatch<SetStateAction<RealmOption>>;
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
  profile: Profile | null;
  loading: boolean;
  error: Error | null;
  handleSearchProfile: () => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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

  const contextData = {
    profileName,
    setProfileName,
    selectedRegion,
    setSelectedRegion,
    selectedRealm,
    setSelectedRealm,
    profile,
    loading,
    error,
    handleSearchProfile,
  };

  return (
    <ProfileContext.Provider value={contextData}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within ProfileContext");
  }
  return context;
};
