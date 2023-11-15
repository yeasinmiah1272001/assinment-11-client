
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
const update = useLoaderData()
console.log(update)
const { _id,img, amount, serviceName, description, area, name, email } = update;
const navigate = useNavigate()
    const handleUpdate = (e) => {
      e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const area = e.target.area.value;
          const description = e.target.description.value;
          const serviceName = e.target.service.value;
          const amount = e.target.amount.value;
          const img = e.target.photo.value; 

     const order = {
     name,
     email,
     area,
     description,
     serviceName,
     amount,
     img,
   

    };
    console.log(order)



      // send data to the server
      fetch(`https://assinment-11-server-rust.vercel.app/booking/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Data Updated Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
         navigate("/desh/my");
       
    };
    


       return (
         <div>
           <div className="bg-blue-400 p-8 md:p-24">
             <h2 className="text-3xl font-extrabold text-center mb-4">
               Update Services
             </h2>
             <form onSubmit={handleUpdate} className="space-y-6">
               <div className="flex flex-wrap -mx-3 mb-6">
                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                   <label className="block mb-2">
                     <span className="text-lg">First Name</span>
                     <input
                       type="text"
                       name="name"
                       defaultValue={name}
                       placeholder="Enter your first name"
                       className="block w-full mt-1 p-2 border rounded"
                     />
                   </label>
                 </div>
                 <div className="w-full md:w-1/2 px-3 mb-6">
                   <label className="block mb-2">
                     <span className="text-lg">Your Email</span>
                     <input
                       type="text"
                       name="email"
                       defaultValue={email}
                       placeholder="Enter your email"
                       className="block w-full mt-1 p-2 border rounded"
                     />
                   </label>
                 </div>
                 <div className="w-full md:w-1/2 px-3 mb-6">
                   <label className="block mb-2">
                     <span className="text-lg">Service Name</span>
                     <input
                       type="text"
                       name="service"
                       defaultValue={serviceName}
                       placeholder="Enter service name"
                       className="block w-full mt-1 p-2 border rounded"
                     />
                   </label>
                 </div>
                 <div className="w-full md:w-1/2 px-3 mb-6">
                   <label className="block mb-2">
                     <span className="text-lg">Due Amount</span>
                     <input
                       type="text"
                       name="amount"
                       defaultValue={amount}
                       placeholder="Enter due amount"
                       className="block w-full mt-1 p-2 border rounded"
                     />
                   </label>
                 </div>
                 <div className="w-full px-3 mb-6">
                   <label className="block mb-2">
                     <span className="text-lg">Photo URL</span>
                     <input
                       type="text"
                       name="photo"
                       defaultValue={img}
                       placeholder="Enter photo URL"
                       className="block w-full mt-1 p-2 border rounded"
                     />
                   </label>
                 </div>
                 <div className="w-full px-3 mb-6">
                   <label className="block mb-2">
                     <span className="text-lg">Description</span>
                     <input
                       type="text"
                       name="description"
                       defaultValue={description}
                       placeholder="Description"
                       className="block w-full mt-1 p-2 border rounded"
                     />
                   </label>
                 </div>
                 <div className="w-full px-3 mb-6">
                   <label className="block mb-2">
                     <span className="text-lg">Service Area</span>
                     <input
                       type="text"
                       name="area"
                       defaultValue={area}
                       placeholder="Your Location"
                       className="block w-full mt-1 p-2 border rounded"
                     />
                   </label>
                 </div>
               </div>
               <div className="flex items-center justify-center">
                 <button
                   type="submit"
                   className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                 >
                   update
                 </button>
               </div>
             </form>
           </div>
         </div>
       );
};

export default Update;