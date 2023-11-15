import { useLoaderData } from "react-router-dom";
import AllServices from "../AllServices/AllServices";


const AllService = () => {
       const allService = useLoaderData()
       console.log(allService)
       return (
         <div>
           <div>
             <h1 className="text-center font-bold text-red-500 text-4xl">The public services of our   <br /> company come here</h1>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-4">
             {allService.map((allData) => (
               <AllServices key={allData._id} allData={allData}></AllServices>
             ))}
           </div>
         </div>
       );
};

export default AllService;