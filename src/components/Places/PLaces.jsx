import React, { useEffect } from "react";
import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/places/Jaipur.jpg";
import Img2 from "../../assets/places/Udaipur.png";
import Img3 from "../../assets/places/Ajmer.jpg";
import Img4 from "../../assets/places/jaisalmer.jpg";
import Img5 from "../../assets/places/Jodhpur.jpg";
import Img6 from "../../assets/places/Bikaner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PlaceData = [
  {
    image: Img1,
    name: "Jaipur",
    location: "Rajasthan, India",
    details:
      "Jaipur, the capital city of Rajasthan, stands as a jewel in the crown of the Golden Triangle, alongside Delhi and Agra. This enchanting city, often referred to as the Pink City, owes its nickname to the terracotta-pink hue that adorns many of its buildings. The Pink City is a testament to the royal heritage of Rajasthan, known for its magnificent palaces, vibrant bazaars, and imposing forts",
    zone: "Gateway to Rajasthan",
    price: "₹7500",
  },
  {
    image: Img2,
    name: "Udaipur",
    location: "Rajasthan, India",
    details:
      "Udaipur, the City of Lakes, stands as a jewel in the crown of Rajasthan, India. Nestled amidst the Aravalli Range, this city captivates visitors with its regal charm, historic grandeur, and scenic landscapes.",
    zone: "City of Lakes",
    price: "₹8,999",
  },
  {
    image: Img3,
    name: "Ajmer",
    location: "Rajasthan, India",
    details:
      "Ajmer is a city in the northern Indian state of Rajasthan. South of the city's artificial Ana Sagar Lake is Ajmer Sharif Dargah, the domed shrine of the Muslim Sufi saint Garib Nawaz",
    zone: "City of Unity",
    price: "₹6700",
  },
  {
    image: Img4,
    name: "Jaisalmer",
    location: "Rajasthan, India",
    details:
      "Jaisalmer, a mesmerizing destination nestled in the heart of the Thar Desert, is a jewel in the crown of Rajasthan. Often referred to as the Golden City",
    zone: "Golden City",
    price: "₹1,199",
  },
  {
    image: Img5,
    name: "Jodhpur",
    location: "Rajasthan, India",
    details:
      "Jodhpur is the second-largest city in Rajasthan and the former capital of the Marwar region. It is popularly called the Blue City as it looks completely blue from an aerial view because of its blue walls and houses",
    zone: "The Blue City",
    price: "₹13,800",
  },
  {
    image: Img6,
    name: "Bikaner",
    location: "Rajasthan, India",
    details:
      "Bikaner is a city in the north Indian state of Rajasthan, east of the border with Pakistan. It's surrounded by the Thar Desert. The city is known for the 16th-century Junagarh For",
    zone: "Camel country",
    price: "₹9700",
  },
];

const PLaces = ({ handleOrderPopup }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1
          data-aos="fade-up"
          data-aos-duration="300"
          className="text-3xl transition-all my-8 py-2 pl-2 font-bold border-l-8 border-primary/50"
        >
          Best Places to Visit In Rajasthan
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="grid transition-all grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {PlaceData.map((item, index) => {
            return (
              <PlacesCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PLaces;
