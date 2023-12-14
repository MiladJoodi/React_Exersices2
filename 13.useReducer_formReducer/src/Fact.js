import Axios from "axios"
import { useReducer, useState } from "react"
import { factReducer, initialState } from "./factReducer"
import { ACTION_TYPES } from "./factAction"

export const Fact=()=>{
    // const [loading, setLoading] =useState(false)
    // const [fact, setFact] =useState("")
    // const [error, setError] =useState(false)

 // Fetch_start   : loading :true
 // fetch_success : loading: false
 //               : fact : res.data.fact
 //
 // fetch_error   : loading: false
 //               : error  : true

 const [state , dispatch] = useReducer(factReducer, initialState)

    const handleFetch =() => {
        dispatch({type: ACTION_TYPES.fetch_start})
        Axios.get("https://catfact.ninja/fact")
        .then((res)=>{
            dispatch({type: ACTION_TYPES.fetch_success, data: res.data.fact})
            console.log(res.data.fact)

        })
        .catch((error)=>{
            dispatch({type: ACTION_TYPES.fetch_error})
            console.log(error)
        })
    }
    return(
        <div>
        <button onClick={handleFetch}>
            {state.loading ? "is loading..." : "Fetch Cat Fact"}
        </button>
        {state.error && (<p>Error, some thing is wrong</p>)}
        <h1>{state.fact}</h1>
        </div>
    )
}