import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";

const Layout = () => {

  const [orderPopup , setOrderPopup] = useState(false)
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup)
  }
  return (
    
    <>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} setorderPopup={setOrderPopup}/>
    </>
  );
};

export default Layout;
