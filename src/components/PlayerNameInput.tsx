import { useProfileContext } from "../context/ProfileContext";

const PlayerNameInput = () => {
  const { profileName, setProfileName } = useProfileContext()

  return (
    <div className="flex flex-col gap-1 md:flex-1">
      <label className="text-white font-bold" htmlFor="playerName">Player Name:</label>
      <input
        className="bg-white p-2"
        type="text"
        placeholder="Enter Player Name"
        id="playerName"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
      />
    </div>
  );
};

export default PlayerNameInput;
