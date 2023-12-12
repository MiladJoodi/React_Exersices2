import React, {useContext} from 'react'
import { ProfileContext } from '../App'

function Home() {

  const {username} = useContext(ProfileContext)

  return (
    <div>Home - user name is {username}</div>
  )
}

export default Home