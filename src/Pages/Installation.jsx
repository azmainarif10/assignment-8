import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Installation = () => {
   
    const [selected,setSelected] = useState([])

    
    useEffect(()=>{
      const saved =  JSON.parse(localStorage.getItem("saved")) || []
            setSelected(saved)
},[])


 function handleRemove(id){
     
    const filtered = selected.filter(sel=>sel.id !== id)
           setSelected(filtered)
              localStorage.setItem('saved',JSON.stringify(filtered))
 
 } 
     
    return (
        <div>
           
            
             {
             selected.map(select=><div className='lg:w-11/12 justify-between rounded-2xl items-center gap-5 flex h-24 mx-auto mt-5 shadow-2xl '>
                
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
                <button onClick={()=>{handleRemove(select.id)}} className="btn mr-5 bg-[#00D390] font-[Inter] text-lg text-white "> Uninstall</button>

             </div>
             </div>
             )
            }
          
           
          
               
        </div>
    );
};

export default Installation;
          