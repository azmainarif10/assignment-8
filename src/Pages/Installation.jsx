import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
 import {  toast } from 'react-toastify';

const Installation = () => {
   
    const [selected,setSelected] = useState([])
    const [sort,setSort] = useState("")
    useEffect(()=>{
      const saved =  JSON.parse(localStorage.getItem("saved")) || []
            setSelected(saved)
},[])
     const sorted = [...selected].sort((a,b)=>{
  if(sort === "High to Low"){
    return b.size- a.size;
  
  }if(sort === "Low to High"){
    return a.size- b.size;
  
  }
   return 0 ;

     })
 function handleRemove(id){
     toast("The app is being uninstalled")
    const filtered = selected.filter(sel=>sel.id !== id)
           setSelected(filtered)
              localStorage.setItem('saved',JSON.stringify(filtered))
 
 } 
     
    return (
        <div>
                   <p className='  mt-5 font-[Inter] font-semibold  lg:text-5xl text-center'>Your Installed Apps</p>

                   <p className=' mt-3 font-[Inter] text-[20px] font-normal text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
   
    <div className='flex mt-4 justify-between'>
        <p className=' lg:ml-16 ml-4 font-[Inter] text-[#001931] font-semibold text-2xl '>({selected.length}) Apps Found</p>
         <details className="dropdown mr-5 lg:mr-15">
  <summary className="btn m-1">Sort By Size</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>{setSort("High to Low")}}>High to Low</a></li>
    <li><a onClick={()=>{setSort("Low to High")}}>Low to High</a></li>
  </ul>
</details>
    </div>
            
             {
             sorted.map(select=><div className='lg:w-11/12 justify-between rounded-2xl items-center gap-5 flex h-24 mx-auto mt-5 shadow-2xl '>
                
               <div className='flex gap-5'>
                     <div>
                    <img className='h-12 w-12 ml-4 rounded-lg' src={select.image} alt="" />
                </div>
                
                <div>
                    <p  className='font-[Inter] text-[20px] font-medium'>{select.title}</p>
                    <div className='flex items-center gap-7'>
                       <div className='flex items-center' >
    <img className='h-3 w-3' src='/icon-downloads.png' />
   
    <p className='font-[Inter] text-[16px] font-extrabold text-[#001931]'>{select.downloads}</p>
  </div>
                       <div className='flex items-center'>
    <img className='h-3 w-3' src='/icon-ratings.png' />
   
    <p className='font-[Inter] text-[16px] font-extrabold text-[#001931]'>4.9</p>
  </div>
                      
                      <div><p className='font-[Inter] text-[16px] font-extrabold text-[#001931]'>{select.size}</p></div>  
                    </div>
                </div>
            </div>

              <div>
                <button onClick={()=>{handleRemove(select.id)}} className="btn mr-5 bg-[#00D390] font-[Inter] text-lg text-white ">Uninstall</button>

             </div>
             </div>
             )
            }
          
           
          
               
        </div>
    );
};

export default Installation;
          