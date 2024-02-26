import React from "react";
import { IoLocationSharp } from 'react-icons/io5'
const PlacesCard = ({ image, name, location, details, zone, price ,handleOrderPopup }) => {
  return (
    <div onClick={handleOrderPopup} className="shadow-2xl  transition-all duration-500 hover:shadow-2xl hover:shadow-[#f36527] cursor-pointer ">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="place"
          className="mx-auto h-[220px] w-full object-cover transition duration-300 hover:skew-x-2 hover:scale-110"
        />
      </div>

      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 font-bold text-xl">{name}</h1>
        <div className="flex items-center gap-2 opacity-70">
           <IoLocationSharp/>
          <span>{location}</span>
        </div>
        <p className="line-clamp-2">{details}</p>
        <div className="flex items-center justify-between border-t-2 y-3 !mt-3">
          <div>
          <p>{zone}</p>
          </div>
        
          <div>
            <p className="text-xl font-bold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
