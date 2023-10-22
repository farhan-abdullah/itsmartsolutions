// // const Navbar = () => {
// //
// //    <>

// //    </>;
// // };

// // export default Navbar;

// import React, { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
//
// import logo1 from "../../assets/logo.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//    const [isOpen, setIsOpen] = useState(false);
//    return (
//       <div>
//          <div
//             className="cursor-pointer md:hidden  flex items-center justify-between p-5"
//             onClick={() => setIsOpen(!isOpen)}>
//             <img src={logo} alt="" />
//             <div>
//                {isOpen ? (
//                   <FaTimes className="text-4xl text-gray-200"></FaTimes>
//                ) : (
//                   <FaBars className="text-4xl text-gray-200"></FaBars>
//                )}
//             </div>
//          </div>
//          <nav
//             className={`md:flex md:w-[100%] md:justify-between z-40 md:h-[70px] bg-primary/50  absolute  md:fixed md:p-6 md:px-14 backdrop-filter backdrop-blur-sm   left-0 right-0 duration-700 md:items-center ${
//                isOpen ? "pt-10 md:p-0 bg-blue-950" : "-mt-80 md:mt-0"
//             }`}>
//             <div>
//                <img src={logo} className="w-[150px] md:block hidden" alt="" />
//             </div>
//             <div className="uppercase text-gray-200 text-[14px] md:space-x-4 flex justify-between flex-col space-y-3 md:space-y-0 items-center md:flex-row">
//                <Link
//                   to="home"
//                   className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100"></Link>
//                <Link className="cursor-pointer font-semibold hover:text-mezenda duration-700 delay-100">
//                   About
//                </Link>
//                <Link className="cursor-pointer font-semibold hover:text-mezenda duration-700 delay-100">
//                   Skills
//                </Link>
//                <Link className="cursor-pointer font-semibold hover:text-mezenda duration-700 delay-100">
//                   Projects
//                </Link>
//                <Link className="cursor-pointer font-semibold hover:text-mezenda duration-700 delay-100">
//                   Contact
//                </Link>
//             </div>
//             <div className="flex md:flex-none justify-center py-3 md:py-0">
//                <button className="btn font-secondary">Hire me</button>
//             </div>
//          </nav>
//       </div>
//    );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
   const [buttonText, setButtonText] = useState("Click me");
   const [isSticky, setIsSticky] = useState(false);

   const handleClick = () => {
      if (buttonText === "Click me") {
         setButtonText("Clicked!");
      } else {
         setButtonText("Click me");
      }
   };

   const navLinks = (
      <div className="flex flex-col uppercase md:flex-row gap-2">
         <NavLink
            className="text-lg"
            to={"/"}
            style={({ isActive }) => {
               return { borderBottom: isActive ? "solid #00a884" : "" };
            }}>
            Home
         </NavLink>

         <NavLink
            className="md:ml-5 text-lg"
            to={"/servizi"}
            style={({ isActive }) => {
               return { borderBottom: isActive ? "solid #00a884" : "" };
            }}>
            Servizi
         </NavLink>

         <NavLink
            className=" md:ml-5  text-lg"
            to={"/contatti"}
            style={({ isActive }) => {
               return { borderBottom: isActive ? " solid #00a884" : "" };
            }}>
            Contatti
         </NavLink>
      </div>
   );

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsSticky(true);
         } else {
            setIsSticky(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const navbarClass = `navbar ${isSticky ? "fixed" : ""} ${
      isSticky ? "white-bg shadow-lg" : ""
   }`;

   return (
      <div className="">
         <div className={navbarClass}>
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </label>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 text-black  w-52 rounded-md">
                     {navLinks}
                  </ul>
               </div>
               <img
                  src={logo}
                  className="w-[160px] mt-[10px] md:mt-0   h-auto object-cover ml-7 md:ml-28"
                  alt=""
               />
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end md:mr-28">
               <a href="tel:+393314300384" className="main-btn md:w-32 md:h-12">
                  <span>Call</span>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Header;
