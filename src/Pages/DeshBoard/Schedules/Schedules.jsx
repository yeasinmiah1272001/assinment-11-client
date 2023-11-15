

const Schedules = () => {
       const services = [
         { name: "Replacing-a-worn-out-vent ", time: "9:00 AM To 10:00 AM" },
         { name: "Unclogging-a-drain ", time: "10:00 AM To 11:00 AM" },
         { name: "Repairing-a-fence ", time: "11:00 AM To 12:00 AM" },
         { name: "Renovation ", time: "12:00 AM To 1:00 AM" },
         { name: "Plumbing-Repair ", time: "1:00 AM To 2:00 AM" },
         { name: "Patching-drywall ", time: "2:00 AM To 3:00 AM" },
         { name: "Kitchen-Repair", time: "3:00 AM To 4:00 AM" },
         { name: "Painting-a-room ", time: "4:00 AM To 5:00 AM" },
         { name: "Painting-Repair ", time: "9:00 AM To 11:00 AM" },
         { name: "Replacing-a-worn-out-vent ", time: "9:00 AM To 11:00 AM" },
         { name: "Replacing-a-worn-out-vent ", time: "9:00 AM To 11:00 AM" },

       ];
       return (
         <div className="bg-orange-300 p-4">
           <h1 className="text-2xl font-bold mb-4">Our Services Schedule Time</h1>
           <div className="grid grid-cols-2 gap-4">
             {services.map((service, index) => (
               <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                 <h2 className="text-lg font-bold mb-2 text-indigo-500">{service.name}</h2>
                 <p className="text-red-500">Time: {service.time}</p>
               </div>
             ))}
           </div>
         </div>
       );
};

export default Schedules;