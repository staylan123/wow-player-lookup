import PlayerNameInput from "./PlayerNameInput";
import RealmSelector from "./RealmSelector";
import RegionSelector from "./RegionSelector";
import { useProfileContext } from "../context/ProfileContext";

const PlayerSearch = () => {
  const { handleSearchProfile } = useProfileContext();

  return (
    <div className="flex flex-col gap-4 mb-8 m-auto max-w-[1440px] ">
      <div className="flex flex-col gap-2 md:flex-row">
        <PlayerNameInput />
        <RealmSelector />
      </div>
      <RegionSelector />
      <button
        className="bg-orange-800 px-4 py-2 rounded cursor-pointer text-white max-w-[320px]"
        onClick={handleSearchProfile}
      >
        Search
      </button>
    </div>
  );
};

export default PlayerSearch;
