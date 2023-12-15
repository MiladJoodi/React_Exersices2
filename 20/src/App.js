import React from 'react'
import { Person } from './Person'

function App() {
  return (
    <div>
      <Person
      name={2}
      email={"test@gmail.com"}
      age= {43}
      isMarried= {true}
      courses={["react", "mysql","python"]}
      />
    </div>
  )
}

export default App