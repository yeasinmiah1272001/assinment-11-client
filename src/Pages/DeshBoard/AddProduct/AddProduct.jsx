import React from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate()
  const handleBook = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const area = e.target.area.value;
    const description = e.target.description.value;
    const serviceName = e.target.service.value;
    const amount = e.target.amount.value;
    const img = e.target.photo.value; // Assuming 'photo' corresponds to 'img' in your order
  
   

    const order = {
     name,
     email,
     area,
     description,
     serviceName,
     amount,
     img,
   

    };
    console.log(order);
     fetch("https://assinment-11-server-rust.vercel.app/booking", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(order),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.insertedId > 0) {
           Swal.fire({
             title: "Success!",
             text: "Data Added Successfully",
             icon: "success",
             confirmButtonText: "Cool",
           });
         }
         navigate("/desh/my");
       });
     

 

    
  };

  return (
    <div>
      <div className="bg-blue-400 p-8 md:p-24">
        <h2 className="text-3xl font-extrabold text-center mb-4">
          Book Services
        </h2>
        <form onSubmit={handleBook} className="space-y-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block mb-2">
                <span className="text-lg">First Name</span>
                <input
                  type="text"
                  name="name"
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
              Add Your Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
