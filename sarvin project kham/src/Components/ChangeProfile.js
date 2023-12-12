import React, { useContext, useState } from 'react'
import { ProfileContext } from '../App'

function ChangeProfile(props) {
    const {setUsername} = useContext(ProfileContext)
    const [newUsername, setNewUsername] = useState("")

  return (
    <div>
        <input onChange={(event)=> setNewUsername(event.target.value)} />
        <button onClick={()=>{setUsername(newUsername)}}>Change Username</button>
    </div>
  )
}

export default ChangeProfile