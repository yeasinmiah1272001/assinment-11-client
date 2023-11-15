import React from 'react';
import { Link } from 'react-router-dom';

const Choice = () => {
       return (
         <div className="bg-gray-200 my-6">
           <section className="py-12 px-4">
             <div className="max-w-6xl mx-auto text-center">
               <h1 className="text-4xl font-bold text-gray-800 mb-4">
                 Welcome to Our Website
               </h1>
               <p className="text-lg text-gray-600 mb-8">
                 We offer the best services and solutions for you.
               </p>
               <Link to="/desh/"
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
               >
                 Explore Services
               </Link>
             </div>
           </section>
         </div>
       );
};

export default Choice;