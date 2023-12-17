import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export  const Welcome = ()=> {

  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("show_app_intro"))
    setShowWelcome((data) ?? true)
  },[])

  const onHideWelcome = ()=>{
    setShowWelcome(false)
    localStorage.setItem("show_app_intro", JSON.stringify(false))
  }

  return (
    <React.Fragment>
      {
        showWelcome && (
          <div className="container">
        <div className="bg-primary text-white my-3">
            <FontAwesomeIcon
                icon = {faClose}
                style={{float: "right", margin:"5px"}}
                onClick={onHideWelcome}
            />
            <div className="p-4">Welcome</div>
        </div>
        </div>
        )
      }
    </React.Fragment>
  )
}
