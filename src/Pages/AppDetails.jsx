import React from 'react';
import { useLocation } from 'react-router';

const AppDetails = () => {
    const location = useLocation()
   
       const {companyName,image,title,size} =location.state
     
    return (
        <div>
            <div className="card card-side bg-base-100 mx-auto shadow-sm">
  <figure className='h-96 w-96'>
    <img
      src={image}
      alt="Movie"
      className='h-80 w-80 rounded-2xl' />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title font-[Inter] font-bold text-3xl">{title}</h2>
    <p>Developed by <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2]  text-transparent bg-clip-text font-[Inter]'>{companyName}</span></p>
<div className='flex gap-4 mt-7'>
 <div >
    <img src='/icon-downloads.png' />
    <p className='font-[Inter] text-[16px] font-normal text-[#001931]'>Downloads</p>
    <p className='font-[Inter] text-4xl font-extrabold text-[#001931]'>8M</p>
  </div>

   <div>
    <img src='/icon-ratings.png' />
    <p className='font-[Inter] text-[16px] font-normal text-[#001931]'>Ratings</p>
    <p className='font-[Inter] text-4xl font-extrabold text-[#001931]'>4.9</p>
  </div>

   <div>
    <img src='/icon-review.png' />
    <p className='font-[Inter] text-[16px] font-normal text-[#001931]'>Total reviews</p>
    <p className='font-[Inter] text-4xl font-extrabold text-[#001931]'>54K</p>
  </div>


</div>
 

     <div className="card-actions mt-5 ">
      <button className="btn bg-[#00D390] text-white ">Install Now ({size}MB)</button>
    </div>
  </div>
 
</div>
        </div>
    );
};

export default AppDetails;