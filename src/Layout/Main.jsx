import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";



const Main = () => {
       return (
         <div>
           <div className="lg:mx-16 p-2">
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
           </div>
         </div>
       );
};

export default Main;