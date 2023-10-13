import React from "react";
import Banner from "../Banner/Banner";
import Statistics from "../Statistics/Statistics";
import Services from "../Services/Services";
import Works from "../Works/Works";
import Sponser from "../Sponser/Sponser";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Statistics></Statistics>
         <About></About>
         <Services></Services>
         <Sponser></Sponser>
         <Works></Works>
         <Testimonials></Testimonials>
      </div>
   );
};

export default Home;
