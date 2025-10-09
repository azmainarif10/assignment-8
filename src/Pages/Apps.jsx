import React from 'react';
import useApps from '../Hooks/useApps';
import AppCard from './AppCard';
import { useState } from 'react';
import { Link } from 'react-router';
import Loader from './Loader';
import { useEffect } from 'react';


const Apps = () => {

    const {data,loading} = useApps();
    const[search,setSearch] = useState('')
    const[matched,setMatched] =useState([])
    const[isLoading,setIsLoading] =useState(false)
     useEffect(()=>{
  
      if(loading) return;
     
      setIsLoading(true)
      const timeOut = setTimeout(() => {
          const term = search.trim().toLowerCase()

     const matchedSearch = term ? data.filter(da=>da.companyName.toLowerCase().includes(term)) : data
     
      setMatched(matchedSearch)
      setIsLoading(false)
      },500);
   return () => clearTimeout(timeOut);

     },[search,data,loading])
    
   
   function handleReset(){
    setSearch('')
   }



  if(loading){
    return(
      <div >
         <Loader />

      </div>

    )
  }
   if(isLoading){
    return(
      <div >
         <Loader />

      </div>

    )
  }

    return (
        <div>

                   <p className='  mt-5 font-[Inter] font-semibold  lg:text-5xl text-center'>Our All Applications</p>

                   <p className=' mt-3 font-[Inter] text-[20px] font-normal text-gray-500 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
   
    <div className='flex mt-4 justify-between'>
        <p className=' lg:ml-16 ml-4 font-[Inter] text-[#001931] font-semibold text-2xl '>({data.length}) Apps Found</p>
        <div className='lg:mr-16 mr-4'>
           <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="search" required placeholder="Search Apps" />
</label>
        </div>
    </div>




     <div className=' mt-6 lg:w-11/12 mx-auto gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

 


      {  
          
            matched.length >0 ? (
        matched.map(app=><AppCard key={app.id} app={app} />) ) : (
            <div>
                   <p className=' font-[Inter] font-semibold text-gray-500 text-5xl text-center'>No apps found</p>
                                <Link to={'/apps'} >  <button onClick={handleReset} className='  mt-5 btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Go to All Apps</button></Link>

            </div>
         
        )
         
        
      }
        </div>
        </div>
    );
};

export default Apps;