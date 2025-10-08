import React from 'react';
import { Link } from 'react-router';
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='font-[Inter] font-medium text-lg'><Link to={"/"}>Home</Link></li>
        <li className='font-[Inter] font-medium text-lg'> <Link to={"/apps"}>Apps</Link></li>
        <li className='font-[Inter] font-medium text-lg'><Link to={"/install"}>Installation</Link></li>
      </ul>
    </div>
    <div className='flex gap-3 lg:ml-20'>
      <Link to={'/'}>
            <img className='h-10 w-10' src="/logo.png" alt="" />
</Link>
   <a className=" bg-gradient-to-r from-[#632ee3] to-[#9f62f2] font-bold text-transparent bg-clip-text text-[Inter] text-2xl">HERO.IO</a>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         <li className='font-[Inter] font-medium text-lg'><Link to={"/"}>Home</Link></li>
        <li className='font-[Inter] font-medium text-lg'> <Link to={"/apps"}>Apps</Link></li>
        <li className='font-[Inter] font-medium text-lg'><Link to={"/install"}>Installation</Link></li>
    </ul>
  </div>
  <div className="navbar-end lg:mr-20">
    <Link to={'https://github.com/azmainarif10'} target="_blank" className=" font-[Inter] font-semibold text-lg  btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white "> <Github /> Continue</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;