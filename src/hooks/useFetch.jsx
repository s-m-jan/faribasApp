import { useQuery } from "react-query";
import Axios from "axios"

const useFetch = (uniqueName, url) => {
    const {data, isError, isLoading}= useQuery([uniqueName], ()=>{
        return Axios.get(url).then((res)=>res.data)
      })
  return {data, isError, isLoading}
}

export default useFetch
