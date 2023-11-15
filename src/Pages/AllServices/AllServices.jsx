
import { Link } from 'react-router-dom';

const AllServices = ({allData}) => {
       const {price, description, title, picture} = allData
       return (
         <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
           <img
             className="w-full h-40 object-cover mx-auto"
             src={picture}
             alt=""
           />
           <div className="px-3 py-2">
             <div className="font-bold text-sm mb-1">{title}</div>
             <p className="text-gray-700 text-xs">{description}</p>
             <p className="text-red-600 text-xs mt-1">{price}</p>
             <div className="flex justify-between mt-3">
               <Link to="/desh/add">
                 <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring focus:border-green-700 text-xs">
                   Confirm Now
                 </button>
               </Link>
             </div>
           </div>
         </div>
       );
};

export default AllServices;