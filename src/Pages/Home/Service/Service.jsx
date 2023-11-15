import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, title, img, price, description } = service;
  return (
 
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
        <img
          src={img}
          alt="Customer"
          className="w-full h-32 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-red-500">Price: {price}</p>
        <p className="text-gray-600">{description}</p>
        <div className="card-actions  text-red-500 items-center my-3">
          <FaArrowRight></FaArrowRight>
          <Link to={`details/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
  );
};

export default Service;
