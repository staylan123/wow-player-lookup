import { PlayerGearCollection } from "../utils/profile.utils";
import { PlayerGearSlotLabels } from "../constants/gear";
import { ItemQualityColors } from "../constants/colors";

const PlayerGear = ({ playerGear, equippedItemLvl }: { playerGear: PlayerGearCollection, equippedItemLvl: number }) => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-semibold underline">Player Gear</h3>
      <p className="font-semibold text-yellow-500">Equipped iLvl - {equippedItemLvl}</p>
      {Object.entries(playerGear).map(([key, gearData]) => (
        <div key={key}>
          <p className="text-sm">
            <span className="font-bold">{PlayerGearSlotLabels[key]}: </span>
            <span style={{ color: ItemQualityColors[gearData.item_quality] }}>
              {gearData.name} (iLvl - {gearData.item_level})
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlayerGear;
