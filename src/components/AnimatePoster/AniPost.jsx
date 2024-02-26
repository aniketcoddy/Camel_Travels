import React, { useEffect } from "react";
import TravelBag from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const AniPost = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="min-h-[550px] bg-gray-100">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* image section */}
            <div>
              <img
                data-aos="flip-up"
                data-aos-duration="700"
                src={TravelBag}
                alt="banner"
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
              />
            </div>
            {/* text content section */}
            <div>
              <h1
                data-aos="fade-up"
                data-aos-duration="500"
                className="text-3xl transition-all font-bold sm:text-4xl"
              >
                Explore all corners of the Rajasthan with us
              </h1>
              <p data-aos="fade-up" data-aos-duration="500" className="text-sm text-gray-500 tracking-wide leading-8">
                Wikis are enabled by wiki software, otherwise known as wiki
                engines. A wiki engine, being a form of a content management
                system
              </p>

              <div data-aos="zoom-in" data-aos-duration="500" className="grid grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400 dark:bg-violet-400" />
                    <p>Flight</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400 dark:bg-orange-400" />
                    <p>Hotel</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-400 dark:bg-green-400" />
                    <p>Wifi</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400 dark:bg-orange-400" />
                    <p>Foods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AniPost;
