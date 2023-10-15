import React from "react";

const Team = () => {
   const teams = [
      {
         name: "John Doe",
         title: "Ceo & founder",
         imageUrl: "https://i.ibb.co/tQRH5HP/client-5.jpg",
      },
      {
         name: "John Doe",
         title: "Ceo & founder",
         imageUrl:
            "https://i.ibb.co/9sPshc6/oliver-ragfelt-kh-V4f-Ty6-D8-unsplash.jpg",
      },
      {
         name: "John Doe",
         title: "Ceo & founder",
         imageUrl:
            "https://i.ibb.co/TRDknmp/vinicius-amnx-amano-0-NCjj-D0z-Gnw-unsplash.jpg",
      },
      {
         name: "John Doe",
         title: "Ceo & founder",
         imageUrl:
            " https://i.ibb.co/BszK1zF/amir-seilsepour-5vg-Sar-Qim-A-unsplash.jpg",
      },
   ];

   return (
      <div className="md:w-[80%] p-5 mx-auto text-white md:py-[80px]">
         <div>
            <div className="flex  mb-10 md:mb-0 justify-between md:items-center items-start md:flex-row flex-col ">
               <div className="space-y-5 mb-8  max-w-[600px]">
                  <p className="text-mezenda uppercase tracking-wider">Teams</p>
                  <h1 className="text-[white] text-3xl font-semibold">
                     Our Teams
                  </h1>
                  <p>
                     Smart solution is a dynamic, flexible & exclusive team.
                     We're some young talented designers and developers who
                     loves to meet new peoples around the world and offer
                     quality service.
                  </p>
               </div>
               <button className="btn-red">See all</button>
            </div>
            <div className="grid md:grid-cols-4 gap-x-3 gap-y-4">
               {teams.map((team, index) => (
                  <div key={index}>
                     <div className="card md:max-w-[300px] p-3 bg-secondary rounded-lg  border border-tertiary shadow-lg shadow-tertiary/40 h-[400px] ">
                        <img
                           className="w-full rounded-lg h-[250px]  bg-cover "
                           src={team.imageUrl}
                           alt=""
                        />
                        <div className="my-3">
                           <h2 className="text-[25px] font-bold">
                              {team.name}
                           </h2>
                           <p className="text-[16px] uppercase text-gray-300">
                              {team.title}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Team;
