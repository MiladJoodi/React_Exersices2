import './App.css';
import { Person , Country} from './Person';

function App() {

  
 const getAge = (name : string) : number =>{
   return 43
 }

 const age :number = getAge("sarvin") 

  return (
    <div className="App">
       <Person 
      name={"sarvin"}
      email={"salam@sarvinstyle.ir"}
      age={43}
      courses={["react","mysql" , "python"]}
      country={Country.Iran}
      />
    </div>
  );
}

export default App;