import React, { useEffect, useState } from "react";
import logoBLack from "../../assets/logo.png";
import logo from "../../assets/logo_white.png";

const Navbar = () => {
   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0 && !isSticky) {
            setIsSticky(true);
         } else if (window.scrollY === 0 && isSticky) {
            setIsSticky(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [isSticky]);

   return (
      <div
         className={`fixed z-30 top-0 left-0 right-0 ${
            isSticky ? "bg-white" : "bg-transparent"
         }`}>
         <div
            className={`navbar px-4 lg:px-16 ${
               isSticky ? "bg-white" : "bg-transparent"
            }`}>
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                     className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
                     <li>
                        <a>Item 1</a>
                     </li>
                     {/* <li>
                        <a>Parent</a>
                        <ul className="p-2">
                           <li>
                              <a>Submenu 1</a>
                           </li>
                           <li>
                              <a>Submenu 2</a>
                           </li>
                        </ul>
                     </li> */}
                     <li>
                        <a>Item 3</a>
                     </li>
                  </ul>
               </div>
               <div>
                  {isSticky ? (
                     <img
                        src={logoBLack}
                        className="w-[150px] h-fit bg-cover"
                        alt=""
                     />
                  ) : (
                     <img
                        src={logo}
                        className="w-[150px] h-fit bg-cover"
                        alt=""
                     />
                  )}
               </div>
            </div>
            <div className={`navbar-center hidden lg:flex`}>
               <ul
                  className={`menu uppercase font-semibold tracking-wider menu-horizontal px-1 ${
                     isSticky ? "text-black" : "text-white"
                  }`}>
                  <li>
                     <a>Home</a>
                  </li>

                  <li>
                     <a>Services</a>
                  </li>
                  <li>
                     <a>Contact</a>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn bg-mezenda hover:bg-blue-800 duration-500 text-white border-none">
                  Get start
               </a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
