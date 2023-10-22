import React from "react";

import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const HomeLayout = () => {
   return (
      <div className="bg-primary">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default HomeLayout;
