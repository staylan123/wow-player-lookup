import React from 'react'
import PlayerInfo from './PlayerInfo'
import PlayerGear from './PlayerGear'
import { useProfileContext } from '../context/ProfileContext'
import { extractPlayerGear } from '../utils/profile.utils'

const ProfileContent = () => {
  const { profile } = useProfileContext()

  if (!profile) return null

  const playerGear = extractPlayerGear(profile);

  return (
    <div>
        <PlayerInfo profile={profile} />
        <hr className='bg-white h-1 my-4 md:my-8'/>
        <PlayerGear playerGear={playerGear} equippedItemLvl={profile.gear.item_level_equipped} />
    </div>
  )
}

export default ProfileContent