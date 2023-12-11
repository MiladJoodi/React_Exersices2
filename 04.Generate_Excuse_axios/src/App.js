import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import axios from "axios";

function App() {
  const [generateExcuse, setGenerateExcuse] = useState("")

  const fetchExcuse = (excuse)=>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
    .then(res=>{
      // console.log(res.data[0].excuse);
      setGenerateExcuse(res.data[0])
    })
  }

  
  return (
    <div className="App">
      <h1>Generate an excuse</h1>

      <div class="btn-group" role="group">
         <button onClick={()=>fetchExcuse("party")} type="button" class="btn btn-outline-primary">Party</button>
        <button onClick={()=>fetchExcuse("family")} type="button" class="btn btn-outline-primary">Family</button>
        <button onClick={()=>fetchExcuse("office")} type="button" class="btn btn-outline-primary">Office</button>
      </div>
        <p>{generateExcuse.excuse}</p>
    </div>
  );
}

export default App;
