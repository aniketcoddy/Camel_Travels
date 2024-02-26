import React, { useEffect } from "react";
import Img1 from "../../assets/places/AmberFort.jpg"
import Img2 from "../../assets/places/Sajjangarh.jpg"
import Img3 from "../../assets/places/AjmerShareef.jpg"
import BlogsCard from "./BlogsCard";
import AOS from 'aos';
import 'aos/dist/aos.css'

const BlogData = [
  {
    id: 1,
    image: Img1,
    title: 'Amer Fort, Jaipur',
    author: 'Aniket Vishnoi',
    date: 'Feb, 2024',
    description: `Cradled on the top of a hill near Jaipur lies the Amer Fort, one of the most magnificent palaces in India. Also commonly known as the Amber Fort, this majestic building with its maze-like passages and serpentine staircases is an architectural masterpiece and with significant importance in Indian history. Only 11 kilometres away from Jaipur, Amer Fort is clad in pink and yellow sandstone and is a part of an extensive complex. Built by one of the most trusted generals of Akbar, Maharaja Man Singh I in the year 1592, Amer Fort served as the main residence of the Rajput Rulers. 
    The Amer Fort through its large ramparts, several gateways and paved paths overlooks the Maotha Lake in the town of Amer, which used to serve as the capital of the erstwhile Jaipur princely state. The fort is big enough that it will take you at least two to three hours to explore it in detail, and you can also choose to avail of the audio guides to lead you through this fascinating building while explaining the history of the place. Getting an elephant ride up the stairs to the Amber Fort is also a popular tourist activity.
    The fort sees over five thousand visitors daily and rightfully, the Amer Fort was inducted into UNESCO World Heritage Site list as part of the Hill Forts of Rajasthan along with five other forts.`,
},

  {
    id:2,
    image:Img2,
    title:"Sajjangarh Palace, Udaipur",
    author:"Aniket vishnoi",
    date:"Feb, 2024",
    description:`Located just on the outskirts of the city of Udaipur, perched atop a hill, Sajjangarh Palace is a former royal residence belonging to the Mewar dynasty, who ruled over this place for centuries. The palatial complex is named after its patron, Maharana Sajjan Singh, who ordered its construction and had it erected in 1884. It was originally intended to be a nine-storeyed astronomical observatory to note and assess the arrival and patterns of monsoon clouds, which could be easily perceived from the palace because of its location at a strategic vantage point at one of the hilltops of Aravalli, called Bansdara Peak. For this reason, it has also earned the name Monsoon Palace. It would have also created employment opportunities for the subjects.
    However, due to the premature death of Maharana Sajjan Singh, that did not turn into a reality. His successor Maharana Fateh Singh transformed it into a place of recreation. During his tenure and after that, the Monsoon Palace was primarily used as a hunting lodge for the royal family of Mewar and their guests. Staying true to the contemporary styles of that time, Sajjangarh Palace displays a fascinating Rajput architecture, complete with high towers, turrets, balconies and pillars. It even had the facilities to harvest rainwater in unique scientific techniques.`,
  },
  {
    id:3,
    image:Img3,
    title:"Ajmer Sharif Dargah, Ajmer",
    author:"Aniket vishnoi",
    date:"Feb, 2024",
    description:`Ajmer Sharif Dargah, also known as Ajmer Dargah, is the tomb of Moinuddin Chishti is one of the holiest places of worship in India not only for the Muslims but followers of every faith. Being the final resting place of the Khwaja Moin-ud-din Chisti, it has had an enormous contribution in spreading the ethical and spiritual values of Islam amongst masses.
    Khwaja Moin-ud-din Chisti was a great Sufi Saint and dedicated his entire life to the upliftment of the poor and downtrodden. The shrine is visited by millions of people every year, as it is considered very sacred by people of all religions. Ajmer Sharif was built by the Mughal Emperor Humayun, hence justifying the rich Mughal Architecture. The Dargah has various constituents like tombs, courtyards and Daalaans. The major among these structures are- Nizam Gate, Buland Darwaza, Jama Masjid, Aulia Masjid, Dargah Shrine, Mehfilkhana and about a dozen of other prominent establishments. 
    One can spot two huge cauldrons in the inner courtyard of the shrine. These containers have a capacity of 2240 kg and 4480 kg and are used during special occasions to cook sweet delicacies like Kheer.`,
  },
];

const BlogsComp = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container transition-all">
        <h1 data-aos="fade-up" data-aos-duration="300"  className="text-3xl my-8 py-2 pl-2 font-bold border-l-8 border-primary/50">
          Our Latest Blogs
        </h1>
        <div data-aos="fade-up" data-aos-duration="500"  className="grid transition-all grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BlogData.map((items, index) => {
            return <BlogsCard key={index}{...items}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
