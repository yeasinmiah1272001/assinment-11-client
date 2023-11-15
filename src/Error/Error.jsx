

const Error = () => {
       return (
         <div className="flex h-screen items-center justify-center">
           <div className="bg-white p-8 rounded shadow-lg text-center">
             <h1 className="text-4xl font-bold text-gray-800">
               404 - Page Not Found
             </h1>
             <p className="text-gray-600 mt-4">
               Sorry, the page you are looking for does not exist.
             </p>
             <img
               src="https://i.ibb.co/kqqFPrM/istockphoto-1200474333-1024x1024.jpg"
               alt="404 Image"
               className="w-80 mx-auto mt-6"
             />
             <p className="text-blue-500 mt-4">
               Return to{" "}
               <a href="/" className="underline">
                 Home
               </a>
             </p>
           </div>
         </div>
       );
};

export default Error;