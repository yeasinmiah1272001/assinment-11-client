import React from 'react';
 const serviceNames = [
   "Painting-Repair",
   "Painting-a-room",
   "Kitchen-Repair",
   "Patching-drywall",
   "Plumbing-Repair",
   "Renovation",
   "Repairing-a-fence",
   "Repairing-a-broken-window",
   "Unclogging-a-drain",
   "Replacing-a-worn-out-vent",
   
 ];

const Title = () => {
       return (
         <div>
           <div className="bg-gray-200 p-4">
             <h2 className="text-2xl font-bold mb-4 text-yellow-500">List of our Services Name</h2>
             <ul className="grid grid-cols-2 gap-4">
               {serviceNames.map((service, index) => (
                 <li
                   key={index}
                   className="bg-white rounded-lg shadow-md p-4 hover:bg-blue-200 transition duration-300"
                 >
                   <p className="text-lg font-semibold text-orange-400">{service}</p>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       );
};

export default Title;