import React from "react";
import front from "./../../assets/front-end.svg";
import server from "./../../assets/front-end.svg";
import ui from "./../../assets//ux.svg";
import svg1 from "./../../assets/front-end.svg";
import svg2 from "./../../assets/front-end.svg";
const Works = () => {
   return (
      <div className="md:w-[80%]  p-5 mx-auto text-[#FFFFFF99] mt-5">
         <div className="flex justify-between items-center ">
            <div className="space-y-5 mb-8 max-w-[600px]">
               <p className="text-mezenda uppercase tracking-wider">Work</p>
               <h1 className="text-[white] text-3xl font-semibold">
                  Our Works
               </h1>
               <p>
                  Commodo elementum, sed imperdiet nunc euismod etiam aliquet
                  viverra enim. Adipiscing nunc condimentum risus id. Aquam
                  mattis magna facilisi
               </p>
            </div>
            <button className="btn-red">See all</button>
         </div>
         <div className="grid md:grid-cols-2">
            <div className="">
               <img
                  src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/work1-puhl6g1plg7tlkauw0cd726zcwplbxrxevlvkrn5h0.jpg"
                  alt=""
                  className="h-full w-full bg-cover"
               />
            </div>
            <div className=" bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10  ">
               <div className="">
                  <h1 className="md:text-4xl 2xl:text-5xl  text-2xl font-bold text-[white]">
                     UI/UX <br /> Design
                  </h1>
               </div>
               <p className="text-[#FFFFFF99]">
                  Commodo elementum, sed imperdiet nunc euismod etiam aliquet
                  viverra enim. Adipiscing nunc condimentum risus id. Aquam
                  mattis magna facilisi
               </p>
               <button className="btn-secondary">Discover more</button>
            </div>
            <div className=" bg-[#e3e5f3] text-[black] p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
               <div className="">
                  <h1 className="md:text-4xl 2xl:text-5xl text-2xl  font-bold ">
                     Front End Development
                  </h1>
               </div>
               <p className="">
                  Commodo elementum, sed imperdiet nunc euismod etiam aliquet
                  viverra enim. Adipiscing nunc condimentum risus id. Aquam
                  mattis magna facilisi
               </p>
               <button className="btn-secondary border-tertiary text-tertiary">
                  Discover more
               </button>
            </div>
            <div className="">
               <img
                  src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/work3-puhmk1183u3c12a2cxww81rbfmbmd5m78agxx84j90.jpg"
                  alt=""
                  className="h-full w-full bg-cover"
               />
            </div>
            <div className="">
               <img
                  src="https://templatekits.themewarrior.com/solvero/wp-content/uploads/sites/65/elementor/thumbs/work2-puhmjy7pjbzh28e5tep0ikgxngpiq2b07wihhe8pro.jpg"
                  alt=""
                  className="h-full w-full bg-cover"
               />
            </div>
            <div className=" bg-secondary p-5 md:px-10 md:py-20 2xl:px-16 space-y-10">
               <div className="">
                  <h1 className="md:text-4xl 2xl:text-5xl text-2xl  font-bold text-[white]">
                     Front End Development
                  </h1>
               </div>
               <p className="text-[#FFFFFF99]">
                  Commodo elementum, sed imperdiet nunc euismod etiam aliquet
                  viverra enim. Adipiscing nunc condimentum risus id. Aquam
                  mattis magna facilisi
               </p>
               <button className="btn-secondary">Discover more</button>
            </div>
         </div>
      </div>
   );
};

export default Works;
