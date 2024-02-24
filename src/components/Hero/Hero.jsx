import React, { useState , useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
  const [priceValue, setPriceValue] = useState(40);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  
  return (
    <div className=" bg-black/20 h-full">
      <div className="flex h-full justify-center items-center p-4 bg-primary/10">
        <div className="conatainer grid grid-cols-1 gap-4">
          <div className="text-white" data-aos="fade-up" data-aos-duration="300">
            <p>Our packages</p>
            <p className="font-bold text-3xl">Search Your Destination</p>
          </div>
          {/* form section */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="space-y-4 transition-all bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 ">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Search for destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-200 my-2 text-sm range accent-primary focus:outline-primary
                   focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full bg-gray-200 my-2 range accent-primary focus:outline-primary 
                  focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">${priceValue}</p>
                  </div>
                </label>
                <div>
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="apprearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* button section */}
            <button
              className="bg-gradient-to-r text-white from-primary to-secondary hover:scale-105 px-4 py-2 
            rounded-full duration-200 absolute -bottom-5 left-1/2 
            -translate-x-1/2"
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
