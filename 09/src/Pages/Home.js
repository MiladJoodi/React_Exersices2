import React from 'react'
import { useQuery } from 'react-query'
import Axios from 'axios'

function Home() {
  const {data : catData, isLoading, isError, error, refetch} = useQuery(["cat"], ()=>{
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
  })

  if(isLoading) return <img src="images/loading.gif" />
  if(isError) return <h2>ارتباط با سرور برقرار نشد:<br/> {error.message}</h2>
  

  return (
    <div>Home
      <h1>{catData?.fact}</h1>
      <button onClick={refetch}>به روزرسانی</button>
    </div>
  )
}

export default Home