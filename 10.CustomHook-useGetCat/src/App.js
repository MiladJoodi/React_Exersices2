import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Cat} from './Cat'

function App() {
  const client = new QueryClient({defaultOptions: {
    queries: {refetchOnWindowFocus: false}
  }})
  return (
    <QueryClientProvider client={client}>
      <Cat />
    </QueryClientProvider>
  )
}

export default App