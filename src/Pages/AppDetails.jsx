import React from 'react';

import { Link, useLocation } from 'react-router';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 import {  toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { Siren } from 'lucide-react';
const AppDetails = () => {
    const location = useLocation()
  

    
       const [installed,setInstalled] = useState(false)
        
       if(!location.state){
       return(
        <div>

         <div className='flex justify-center items-center'> <Siren size={230} /></div> 
        <p className='  mt-5 font-[Inter] font-semibold  lg:text-5xl text-center'>Oops, Apps not found!</p>
   <div className='flex justify-center items-center'>
    <Link to={'/'} >  <button className='  mt-5 btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Go Back</button></Link>
    </div> 

        </div>
       
       ) 
      }
     

       const {companyName,image,title,size,ratings,description,id,downloads,ratingAvg} = location.state;
       
          useEffect(()=>{
           
          const existing = JSON.parse(localStorage.getItem("saved")) || []
        
           const alreadyInstalled = existing.some(exits=>exits.id === id)
              setInstalled(alreadyInstalled)

        },[id])

     
    function handleInstall(){
         if(installed) return toast("App is already installed")
       const existing = JSON.parse(localStorage.getItem("saved")) || []
        let updated = []
       if(existing){
        updated = [...existing,location.state]
      }
       else{
          updated.push(location.state)
       }
          localStorage.setItem('saved',JSON.stringify(updated))
             
        setInstalled(true)
       toast("App installed")
         
      }
     
    


     return (


     
        <div>
            <div className="card lg:card-side bg-base-100 mx-auto shadow-sm">
  <figure className='lg:h-80 lg:w-80'>
    <img
      src={image}
      alt="Movie"
      className='lg:h-72 lg:w-72 rounded-2xl' />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title font-[Inter] font-bold text-3xl">{title}</h2>
    <p>Developed by <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2]  text-transparent bg-clip-text font-[Inter]'>{companyName}</span></p>
<hr className='text-gray-400 mb-3'></hr>
<div className='flex gap-4 '>
 <div >
    <img src='/icon-downloads.png' />
    <p className='font-[Inter] text-[16px] font-normal text-[#001931]'>Downloads</p>
    <p className='font-[Inter] text-4xl font-extrabold text-[#001931]'>{downloads}</p>
  </div>

   <div>
    <img src='/icon-ratings.png' />
    <p className='font-[Inter] text-[16px] font-normal text-[#001931]'>Ratings</p>
    <p className='font-[Inter] text-4xl font-extrabold text-[#001931]'>{ratingAvg}</p>
  </div>

   <div>
    <img src='/icon-review.png' />
    <p className='font-[Inter] text-[16px] font-normal text-[#001931]'>Total reviews</p>
    <p className='font-[Inter] text-4xl font-extrabold text-[#001931]'>54K</p>
  </div>


</div>
 

     <div className="card-actions mt-5 ">
      <button  onClick={handleInstall} className={'btn bg-[#00D390]   text-white'}> {installed ? "Installed" :`Install Now (${size}MB)`}</button>
    </div>
  </div>
 
</div>




  <div className='h-80 mb-5'>
          
          <p className=' ml-5 mt-5 font-[Inter] text-2xl font-semibold text-[#001931]'>Ratings</p>
 <ResponsiveContainer width="100%" height="100%">
      <BarChart
       
        data={ratings}
        layout='vertical'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis   type='number' />
        <YAxis dataKey="name"  type='category'reversed='true' />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#FF8811" activeBar={<Rectangle fill="pink" stroke="FF8811" />} />
       
      </BarChart>
    </ResponsiveContainer>



  </div>


     <div>
      <p className=' ml-5 mt-5 font-[Inter] text-2xl font-semibold text-[#001931]'>Description</p>
      <p className='ml-5  font-[Inter] text-lg font-normal text-[#001931] '>{description}</p>
     </div>


        </div>
    );
};

export default AppDetails;