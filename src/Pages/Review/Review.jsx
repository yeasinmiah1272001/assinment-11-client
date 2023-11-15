
import customer from '../../assets/c.jpg'

const Review = () => {
       return (
         <div>
           <div>
             <div>
               <div className="container rounded-lg mt-10 mx-auto px-8 md:px-16 lg:px-10 bg-blue-100">
                 <div className="team-header-section text-cente pt-10 py-3">
                   <h1 className="team-heading text-4xl py-3 text-center font-bold">
                     Our Team Member
                   </h1>
                   <p className="text-sm text-center text-gray-700 ">
                     Team members collaborate actively, taking ownership of
                     tasks and offering support, fostering an environment of{" "}
                     <br />
                     innovation and mutual respect. They maintain clear
                     communication, adapt to changing priorities, and prioritize{" "}
                     <br />
                     continuous improvement for collective success.
                   </p>
                 </div>
                 <div className="container text-center grid lg:grid-cols-4 sm:grid-cols-1 my-10  px-10 pb-10">
                   <div>
                     <div className="avatar">
                       <div className="w-24 rounded-full">
                         <img src="https://i.ibb.co/gSp0LQh/member1.png" />
                       </div>
                     </div>
                     <h1 className="text-center text-black ">Ripon</h1>
                     <p className="text-center text-black">Wall Repair man</p>
                     <div>
                       <i className="fa-brands fa-facebook text-white"></i>
                       <i className="fa-brands fa-twitter text-white"></i>
                       <i className="fa-brands fa-linkedin text-white"></i>
                     </div>
                   </div>
                   <div>
                     <div className="avatar">
                       <div className="w-24 rounded-full">
                         <img src="https://i.ibb.co/wpkr2pG/member2.png" />
                       </div>
                     </div>
                     <h1 className="text-center text-black ">Rahim</h1>
                     <p className="text-center  text-black">
                       Flooring Repair man
                     </p>
                     <div>
                       <i className="fa-brands fa-facebook text-white "></i>
                       <i className="fa-brands fa-twitter  text-white"></i>
                       <i className="fa-brands fa-linkedin  text-white"></i>
                     </div>
                   </div>
                   <div>
                     <div className="avatar">
                       <div className="w-24 rounded-full">
                         <img src="https://i.ibb.co/0y7Bt8p/member3.png" />
                       </div>
                     </div>
                     <h1 className="text-center text-black"> Nazmul</h1>
                     <p className="text-center text-black">Cleaning man</p>
                     <div>
                       <i className="fa-brands fa-facebook text-white"></i>
                       <i className="fa-brands fa-twitter text-white"></i>
                       <i className="fa-brands fa-linkedin text-white"></i>
                     </div>
                   </div>
                   <div>
                     <div className="avatar">
                       <div className="w-24 rounded-full">
                         <img src="https://i.ibb.co/8NPkVc5/member4.png" />
                       </div>
                     </div>
                     <h1 className="text-center text-black ">
                       Safia Chowdhury
                     </h1>
                     <p className="text-center  text-black">Team Manager</p>
                     <div>
                       <i className="fa-brands fa-facebook  text-white"></i>
                       <i className="fa-brands fa-twitter  text-white"></i>
                       <i className="fa-brands fa-linkedin  text-white"></i>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="bg-blue-200 p-4 rounded-md shadow-md flex items-center mb-3">
             <div className="mr-4">
               <img
                 src={customer}
                 alt="Customer Avatar"
                 className="w-28 h-16 rounded-full"
               />
             </div>
             <div>
               <h1 className="text-2xl font-bold mb-2">Customer Review</h1>
               <div className="border-b mb-2"></div>
               <p className="text-lg mb-2">
                 An enthusiastic and engaged customer who provided clear and
                 detailed feedback. Their review highlighted specific aspects
                 they appreciated about the product/service, demonstrating a
                 strong understanding of its features. Their comments were
                 constructive, offering valuable insights for potential
                 improvements. Overall, a pleasure to engage with, as their
                 feedback was both thorough and helpful, showcasing a deep
                 appreciation for the product/service
               </p>
               <p className="text-gray-600">- Happy Customer</p>
             </div>
           </div>
         </div>
       );
};

export default Review;