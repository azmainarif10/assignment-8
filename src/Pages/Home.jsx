import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import useApps from '../Hooks/useApps';
import AppCard from './AppCard';
import { Link } from 'react-router';
import Loader from './Loader';

const Home = () => {
    const {data,loading,error} = useApps()
   
    const trendingApps = data.slice(0,8)


   if(loading){
    return(
      <div >
         <Loader />

      </div>

    )
  }

    return (
        <div>
           <Banner />
           <States />
           
           <p className='  mt-5 font-[Inter] font-semibold  lg:text-5xl text-center'>Trending Apps</p>
           <p className=' mt-3 font-[Inter] text-[20px] font-normal text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
     <div className=' mt-6 lg:w-11/12 mx-auto gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {
        trendingApps.map(app=><AppCard key={app.id} app={app} />)
        }
        </div>
        <div className='flex justify-center items-center'>
                    <Link to={'/apps'} >  <button className='  mt-5 btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Show All</button></Link>

        </div>
        </div>  
     
    );
};

export default Home;