import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import axios from "axios";

function App() {

  const [name, setName] = useState("")
  const [predictedResult ,setPredictedResult] = useState({})

  const fetchAge = ()=>{
    axios.get(`https://api.agify.io/?name=${name}`)
    .then(res=> {
      // console.log(res.data.age);
      setPredictedResult(res.data)
    })
  }
  
  return (
    <div className="App">
      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-primary" onClick={fetchAge}>Predict Age</button>
        <input className="rounded border-1 px-2" onChange={(event)=> setName(event.target.value)} placeholder="Enter Your Name" style={{direction: "ltr"}} />
      </div>
      <h4 className="pt-2 ">age is: {predictedResult?.age}</h4>
      <h4 className="pt-2 ">name is: {predictedResult?.name}</h4>
    </div>
  );
}

export default App;
