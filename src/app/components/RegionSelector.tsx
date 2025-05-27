import React, { Dispatch, SetStateAction } from "react";
import { REGIONS } from "../constants/realms";
import Image from "next/image";

type RegionSelectorProps = {
  selectedRegion: string
  setSelectedRegion: Dispatch<SetStateAction<string>>;
}

const RegionSelector = ({selectedRegion, setSelectedRegion} : RegionSelectorProps) => {
  return (
    <div className="m-auto">
      <fieldset className='flex gap-4' id="region">
        {REGIONS.map((region) => {
          return (
            <div className="flex gap-2 items-center" key={region.value}>
              <label className="flex gap-2 items-center" htmlFor={region.label}>
                <Image
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
