 import { Siren } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
 
 const NotFound = () => {
    return (
        <div>
            <div>

         <div className='flex justify-center items-center'> <Siren size={230} /></div> 
        <p className='  mt-5 font-[Inter] font-semibold  lg:text-5xl text-center'>Oops, Apps not found!</p>
   <div className='flex justify-center items-center'>
    <Link to={'/'} >  <button className='  mt-5 btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Go Back</button></Link>
    </div> 

        </div>
        </div>
    );
 };
 
 export default NotFound;