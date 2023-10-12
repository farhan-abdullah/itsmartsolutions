import React from "react";
import Banner from "../Banner/Banner";
import Story from "../Story/Story";
import Services from "../Services/Services";
import Works from "../Works/Works";
import Sponser from "../Sponser/Sponser";

const Home = () => {
   return (
      <div>
         <Banner></Banner>

         <Story></Story>
         {/* <div className='w-[300px] h-[200px] relative'>
				<div className='bg-element'></div>
			</div> */}
         <Services></Services>
         <Sponser></Sponser>
         <Works></Works>
      </div>
   );
};

export default Home;
