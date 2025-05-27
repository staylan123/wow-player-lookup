import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { EU_REALMS, KR_REALMS, TW_REALMS, US_REALMS } from "../constants/realms";
import { RealmOption } from "../types/types";

type RealmSelectorProps = {
  selectedRegion: string;
  selectedRealm: RealmOption;
  setSelectedRealm: Dispatch<SetStateAction<RealmOption>>;
};

const RealmSelector = ({
  selectedRegion,
  selectedRealm,
  setSelectedRealm,
}: RealmSelectorProps) => {
  const REGION_MAP: { [key: string]: RealmOption[] } = {
    US: US_REALMS,
    EU: EU_REALMS,
    KR: KR_REALMS,
    TW: TW_REALMS
  };

  return (
    <div>
      <label className="text-white font-semibold">Realm:</label>
      <Select
        options={REGION_MAP[selectedRegion.toUpperCase()]}
        value={selectedRealm}
        onChange={(realmOption) => setSelectedRealm(realmOption as any)}
      />
    </div>
  );
};

export default RealmSelector;
