import React from 'react';

const States = () => {
    return (
        <div>
            <div className='mt-8'>
                <div className='flex justify-center items-center'>
                    <img src="/hero.png" alt="" />
                </div>
                <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-10'>
                    <p className='text-center font-[Inter] font-semibold lg:text-4xl text-white'>Trusted by Millions, Built for You </p>
                  <div className='flex justify-center px-3 lg:px-0 gap-5 lg:gap-25 '>
                      <div className='mt-7 space-y-2'>
                        <p className='font-[Inter] font-normal lg:text-lg text-white'>Total Downloads</p>
                        <p className='font-[Inter] lg:font-extrabold lg:text-6xl text-white'>29.6M</p>
                        <p className='font-[Inter] font-normal lg:text-lg text-white'>21% more than last month</p>
                    </div>
                    <div className='mt-7  space-y-2'>
                        <p className='font-[Inter] font-normal lg:text-lg text-white'>Total Reviews</p>
                        <p className='font-[Inter] lg:font-extrabold lg:text-6xl text-white'>906K</p>
                        <p className='font-[Inter] font-normal lg:text-lg text-white'>46% more than last month</p>
                    </div>
                    <div className='mt-7  space-y-2'>
                        <p className='font-[Inter] font-normal lg:text-lg text-white'>Active Apps</p>
                        <p className='font-[Inter] lg:font-extrabold lg:text-6xl text-white'>132+</p>
                        <p className='font-[Inter] font-normal lg:text-lg text-white'>31 more will Launch</p>
                    </div>
                  </div>
                  

                </div>
            </div>
        </div>
    );
};

export default States;