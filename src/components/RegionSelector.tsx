import { REGIONS } from "../constants/realms";
import { useProfileContext } from "../context/ProfileContext";

const RegionSelector = () => {
  const { selectedRegion, setSelectedRegion } = useProfileContext()

  return (
    <div>
      <fieldset className='flex gap-8' id="region">
        {REGIONS.map((region) => {
          return (
            <div className="flex gap-2 items-center" key={region.value}>
              <label className="flex gap-2 items-center" htmlFor={region.label}>
                <img
                  src={region.flagPath}
                  height={40}
                  width={30}
                  alt={`Flag - ${region.label}`}
                />
              </label>
              <input
                type="radio"
                name="region"
                value={region.value}
                checked={selectedRegion === region.value}
                onChange={(e) => setSelectedRegion(e.target.value)}
              />
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default RegionSelector;
