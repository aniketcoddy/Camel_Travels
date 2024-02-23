import React, {useEffect} from "react";
import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/places/boat.jpg"
import Img2 from "../../assets/places/place4.jpg"
import Img3 from "../../assets/places/place5.jpg"
import Img4 from "../../assets/places/place6.jpg"
import Img5 from "../../assets/places/tajmahal.jpg"
import Img6 from "../../assets/places/water.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'


const PlaceData = [
  {
     image:Img1,
     name:"Boat",
     location:"USA",
     details:"Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 per cent of India's total geographical area.",
     zone:"Cultural Relax",
     price:"$6700",
    },
  {
     image:Img2,
     name:"Taj Mahal",
     location:"India",
     details:"Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 per cent of India's total geographical area.",
     zone:"Cultural Relax",
     price:"$6700",
    },
  {
     image:Img3,
     name:"Water",
     location:"India",
     details:"Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 per cent of India's total geographical area.",
     zone:"Cultural Relax",
     price:"$6700",
    },
  {
     image:Img4,
     name:"Boat",
     location:"USA",
     details:"Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 per cent of India's total geographical area.",
     zone:"Cultural Relax",
     price:"$6700",
    },
  {
     image:Img5,
     name:"Boat",
     location:"USA",
     details:"Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 per cent of India's total geographical area.",
     zone:"Cultural Relax",
     price:"$6700",
    },
  {
     image:Img6,
     name:"Boat",
     location:"USA",
     details:"Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 per cent of India's total geographical area.",
     zone:"Cultural Relax",
     price:"$6700",
    },
];

const PLaces = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="text-3xl my-8 py-2 pl-2 font-bold border-l-8 border-primary/50">
          Best Places to Visit
        </h1>
        <div data-aos="fade-up" data-aos-delay = "1000" className="grid transition-all grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            PlaceData.map((item , index)=>{
               return(
                <PlacesCard key={index} {...item} />
               )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default PLaces;
