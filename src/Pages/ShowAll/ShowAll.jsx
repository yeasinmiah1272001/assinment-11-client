import React from 'react';
import { Link } from 'react-router-dom';

const ShowAll = () => {
       return (
         
         <div>
           <Link to="/allservice">
             <h1 className="my-2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
               Show All
             </h1>
           </Link>
         </div>
       );
};

export default ShowAll;