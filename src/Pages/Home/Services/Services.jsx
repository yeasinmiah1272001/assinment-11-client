import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {

       const [services, setServices] = useState([]);
       useEffect(() =>{
              fetch("https://assinment-11-server-rust.vercel.app/services")
                .then((res) => res.json())
                .then((data) => setServices(data));
       },[])


       return (
         <div>
           <div className="my-6">
             <h1 className="text-center font-bold text-3xl text-red-500">
               Home Repair Services
             </h1>
             <p className="text-center">
               Start up money or a decent amount of savings will get you started{" "}
               <br />
               cleaning business Suspen disse convallis <br /> nulla vel
               bibendum porta.
             </p>
           </div>

           <div className="grid lg:grid-cols-3 gap-20 md:grid-cols-2">
             {services.map((service) => (
               <Service key={service._id} service={service}></Service>
             ))}
           </div>

           
         </div>
       );
};

export default Services;