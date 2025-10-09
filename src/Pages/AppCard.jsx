import { Download, Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';
   
const AppCard = ({app}) => {
   const navigate = useNavigate()
    return (
        <div>
            <div onClick={()=>{navigate(`/details/${app.id}`, {state:app})} } className="card bg-base-100 py-4  shadow-sm">
  <figure className="py-5 px-5">
    <img 
      src={app.image}
      alt="Shoes"
      className="rounded-xl w-full h-60" />
  </figure>
  <div>
    <h2 className="card-title ml-3 font-[Inter] mb-2">{app.title}</h2>
  </div>
    <div className='flex justify-between '>
        <p className='flex text-[#00D390] ml-3'><Download />{app.downloads}M</p>
        <p className='flex text-[#FF8811] mr-3' ><Star />{app.ratingAvg}</p>
    </div>
</div>
        </div>
    );
};

export default AppCard;