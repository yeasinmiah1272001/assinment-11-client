import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout =()=>{
    logOut()
    .then((result => console.log(result)))
    .catch((error =>console.log(error)))
  }


       const Links = (
         <>
           <li>
             <NavLink to="/">Home</NavLink>
           </li>
          
           <li>
             <NavLink to="/allservice">All Service</NavLink>
           </li>
           {user?.email ? (
             <>
             <li> <NavLink to="/desh">DeshBoard</NavLink></li>
               <button onClick={handleLogout}>Logout</button>
             </>
           ) : (
             <li>
               <NavLink to="/Login">Login</NavLink>
             </li>
           )}
         </>



       );

       return (
         <div className="navbar bb-5">
           <div className="navbar-start">
             <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h8m-8 6h16"
                   />
                 </svg>
               </label>
               <ul
                 tabIndex={0}
                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
               >
                 <a href=""> {Links}</a>
               </ul>
             </div>
             <Link>
               <img
                 className="w-20"
                 src="https://i.ibb.co/w41KPtf/logo2.png"
                 alt=""
               />
             </Link>
           </div>
           <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal px-1">{Links}</ul>
           </div>
           <div className="navbar-end">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
               </div>
             </label>

             <button className="btn btn-outline btn-secondary">
               Home Service
             </button>
           </div>
         </div>
       );
};

export default Navbar;