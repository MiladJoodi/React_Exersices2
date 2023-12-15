import React from 'react';
import './App.css';
import { Person,Country } from './Person';

function App() {

  const getAge = (name: string) : number=>{
    return 43
  }
  
  const age: number = getAge("sarvin")
  
  return (
    <div className="App">
       <Person
      name={"Milad"}
      email={"test@gmail.com"}
      age= {43}
      isMarried= {true}
      courses={["react", "mysql","python"]}
      country={Country.Iran}
      />
    </div>
  );
}

export default App;
