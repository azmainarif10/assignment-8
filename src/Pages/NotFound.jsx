 import { Siren } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
 
 const NotFound = () => {
    return (
        <div>
             <div className='flex justify-center items-center mt-8'
                  >
              
                <img 
                 src="/App-Error.png" alt="" />
             </div>
           
              <p className='  mt-5 font-[Inter] font-semibold  lg:text-5xl text-center'>OPPS!! APP NOT FOUND</p>
<p className=' mt-3 font-[Inter] text-[20px] font-normal text-gray-500 text-center'>The App you are requesting is not found on our system.  please try another apps</p>
           <div className='flex justify-center items-center'>
             <Link to={'/'} >  <button className='  mt-5 btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Go Back</button></Link>
           </div>
        </div>
        
    );
 };
 
 export default NotFound;