import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Cat} from './Cat'

function App() {
  const {count, increase, decrease, reset} = useCount()
  return (
    <div className='App'>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App