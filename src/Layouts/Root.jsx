import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

  import { ToastContainer } from 'react-toastify'
const Root = () => {
    return (
        <div className=' flex flex-col min-h-screen'>
         <Navbar />
         <div className='flex-1'>
          <ToastContainer />
           <Outlet />
         </div>

         <Footer />
        </div>
    );
};

export default Root;