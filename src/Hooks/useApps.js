import { useEffect, useState } from "react";
import axios from 'axios';

    

   const useApps = ()=>{
     const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] =useState(null)
    
   useEffect(()=>{

  axios('/appData.json').
    then(data=> setData(data.data))
    .catch(err=>setError(err))
    .finally(()=>{setLoading(false)})

   },[]) 
    return {data,loading,error}
 }

 export default useApps;