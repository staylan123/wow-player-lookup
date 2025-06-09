import Select from "react-select";
import {
  EU_REALMS,
  KR_REALMS,
  TW_REALMS,
  US_REALMS,
} from "../constants/realms";
import { RealmOption } from "../types/types";
import { useProfileContext } from "../context/ProfileContext";

const RealmSelector = () => {
  const { selectedRegion, selectedRealm, setSelectedRealm } =
    useProfileContext();

  const REGION_MAP: { [key: string]: RealmOption[] } = {
    US: US_REALMS,
    EU: EU_REALMS,
    KR: KR_REALMS,
    TW: TW_REALMS,
  };

  return (
    <div className="flex flex-col gap-1 md:flex-1">
      <label className="text-white font-semibold">Realm:</label>
      <Select
        options={REGION_MAP[selectedRegion.toUpperCase()]}
        value={selectedRealm}
        onChange={(realmOption) => {
          if (!realmOption) return;
          setSelectedRealm(realmOption);
        }}
      />
    </div>
  );
};

export default RealmSelector;
