import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    links: "/",
  },
  {
    name: "About",
    links: "/about",
  },
  {
    name: "Blogs",
    links: "/blogs",
  },
  {
    name: "Best Places",
    links: "/places",
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[65%] flex-col justify-between
       bg-white px-8 pb-6 pt-16 text-black 
       transition-all duration-200 md-hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card">
        {/* top section of sidebar */}
        <div>
          <div className="flex items-center gap-3">
            <FaUserCircle size={50} className="text-gray-500" />
            <div className=" flex-col gap-2">
              <h1 className=" text-gray-500">Hello User</h1>
              <h1 className="text-sm text-slate-600 font-sans">Premium User</h1>
            </div>
          </div>
        </div>

        {/* navlinks of sidebar */}
        <div className=" text-black mt-11">
          <ul className="space-y-4 text-lg">
            {navbarLinks.map(({ name, links }) => (
              <li >
                <Link
                  to={links}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className = "mb-3 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
