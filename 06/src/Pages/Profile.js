import React, { useContext } from 'react'
import ChangeProfile from '../Components/ChangeProfile'
import { ProfileContext } from '../App'

function Profile() {
  const {username} = useContext(ProfileContext)

  return (
    <div>Profile - {username}
    <ChangeProfile/>
    </div>
  )
}

export default Profile