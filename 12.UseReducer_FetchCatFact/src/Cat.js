import { useQuery } from 'react-query'
import Axios from 'axios'
import { useGetCat } from './useGetCat';

export const Cat = () => {
  const {data: catData, isLoading, reFetchData} = useGetCat()

  if(isLoading) return <h2>Loading...</h2>
  return (
    <div>
      <button onClick={reFetchData}>update</button>
        <h6>{catData?.fact}</h6>
    </div>
  );
};