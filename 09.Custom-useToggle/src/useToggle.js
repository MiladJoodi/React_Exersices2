import React, { useState } from 'react'

export function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue)

  const toggle = ()=>{
    setState((prev)=> !prev)
  }
  return [state, toggle]
}
