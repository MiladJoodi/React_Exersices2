import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Cat} from './Cat'

function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider>
      <Cat />
    </QueryClientProvider>
    
  )
}

export default App