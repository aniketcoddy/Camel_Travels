import React, { useEffect } from "react";
import Img1 from "../../assets/places/tajmahal.jpg"
import Img2 from "../../assets/places/water.jpg"
import Img3 from "../../assets/places/boat.jpg"
import BlogsCard from "./BlogsCard";
import AOS from 'aos';
import 'aos/dist/aos.css'

const BlogData = [
  {
    id:1,
    image:Img1,
    title:"the 10 best place to visit in india",
    author:"aniket vishnoi",
    date:"April, 2022",
    description:"Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other web-based systems such as blog software or static site generators, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[1] Wiki engines usually allow content to be written using a simplified markup language and sometimes edited with the help of a rich-text editor.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are free and open-source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Further rules may be imposed to organize content."
  },
  {
    id:2,
    image:Img2,
    title:"the 10 best place to visit in india",
    author:"aniket vishnoi",
    date:"April, 2022",
    description:"Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other web-based systems such as blog software or static site generators, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[1] Wiki engines usually allow content to be written using a simplified markup language and sometimes edited with the help of a rich-text editor.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are free and open-source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Further rules may be imposed to organize content."
  },
  {
    id:3,
    image:Img3,
    title:"the 10 best place to visit in india",
    author:"aniket vishnoi",
    date:"April, 2022",
    description:"Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other web-based systems such as blog software or static site generators, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[1] Wiki engines usually allow content to be written using a simplified markup language and sometimes edited with the help of a rich-text editor.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are free and open-source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Further rules may be imposed to organize content."
  },
];

const BlogsComp = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container transition-all">
        <h1 data-aos="fade-up" data-aos-delay="300"  className="text-3xl my-8 py-2 pl-2 font-bold border-l-8 border-primary/50">
          Our Latest Blogs
        </h1>
        <div data-aos="fade-up" data-aos-delay="500"  className="grid transition-all grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BlogData.map((items, index) => {
            return <BlogsCard key={index}{...items}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
