import React from 'react'
import {useSelector} from "react-redux"

export function Contact() {
  const selector = useSelector((state)=> state.user)
  return (
    <div>Contact {selector.username}</div>
  )
}
