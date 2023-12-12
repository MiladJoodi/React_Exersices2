import { useEffect, useState } from "react";
import "./App.css";
import Axios from 'axios'
import axios from "axios";

function App() {

  const [catFact, setCatFact] = useState("")

    // fetch("https://catfact.ninja/fact")
    // .then((res)=> res.json())
    // .then(data =>{
    //   console.log(data);
    // })

    useEffect(()=> {
      fetchHandler()
    }, [])  

    const fetchHandler = ()=>{
      axios.get("https://catfact.ninja/fact").then(res=> {
        // console.log(res.data);
        setCatFact(res.data.fact)
      })
    }



  return (
    <div className="App">
      <button onClick={fetchHandler}>Start Fetch</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
