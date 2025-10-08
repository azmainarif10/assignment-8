import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
       <div className="hero bg-base-200 mt-10 ">
  <div className="hero-content text-center">
    <div >
      <h1 className="text-5xl font-bold">We Build <br />
 <span className=' bg-gradient-to-r from-[#632ee3] to-[#9f62f2] font-bold text-transparent bg-clip-text text-[Inter] '>Productive</span> Apps</h1>
      <p className='py-6'>
        AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br/>Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
     
     <Link to={'https://play.google.com/store/games?hl=en&pli=1'} target="_blank"  >
      <button className=" border border-gray-300 btn py-4 font-[Inter] font-semibold text-[20px] "> <img className='h-6 w-6' src='/Group.png' />Play Store</button></Link>
     <Link to={'https://www.apple.com/app-store/'} target="_blank" > <button className=" border border-gray-300 btn ml-3 py-4 font-[Inter] font-semibold text-[20px] "><img className='h-6 w-6' src='/app.png' />App Store</button>
</Link>
    </div>
  </div>
</div>


    </div>
    );
};

export default Banner;