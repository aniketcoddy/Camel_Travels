import React, { useState } from "react";
import LogoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu.jsx"
import MenuBar from "../../assets/ham.png"

const dropdownLinks = [
  {
    name: "our Services",
    links: "/#services",
  },
  {
    name: "our Services",
    links: "/#services",
  },
  {
    name: "our Services",
    links: "/#services",
  },
];

const Navbar = ({handleOrderPopup}) => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between ">
              <p>20% off on next booking</p>
              <p>Mobile No. 7302918014</p>
            </div>
          </div>
        </div>

        {/* navbar creation starts */}
        <div className="container py-3 sm:py-0 ">
          <div className="flex justify-between items-center">
            {/* logo adding */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={LogoImg} alt=" " className="h-16" />
              </Link>
            </div>
            {/* laptop and desktopview navbar making */}
            <div className="hidden md:block">
              <ul className=" flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    activeclassname="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    activeclassname="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/places"
                    activeclassname="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    activeclassname="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>

                <li className="py-4 relative group cursor-pointer">
                  <div className="dropdown group flex items-center">
                    <span>Quick Link</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>

                  <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {dropdownLinks.map((data, key) => {
                        return (
                          <li key={key}>
                            <a
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.links}
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* book now button */}

            <div className="flex  items-center gap-4">
              <button onClick={()=>handleOrderPopup(true)}  className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                Book Now
              </button>
              {/* hamburger menu icon for mobile view */}
              <div className="md:hidden block">
               <img src={MenuBar}  className="w-6" onClick={toggleMenu}/>
              </div> 
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      </div>
    </>
  );
};

export default Navbar;
