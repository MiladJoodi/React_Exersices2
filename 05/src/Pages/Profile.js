import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {

    const {name, id} = useParams()

  return (
    <div>Profile page of {name} - {id}</div>
  )
}

export default Profile