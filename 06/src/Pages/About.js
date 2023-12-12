import React from 'react'
import {useNavigate} from 'react-router-dom'

function About() {

    let navigate = useNavigate()

  return (
    <>
    <div>About</div>
    <button onClick={()=>{navigate("/")}}>Go to home</button>
    </>
  )
}

export default About