import React from "react";
import { Link } from "react-router-dom";

const Fromdata = ({ service, handleDelete }) => {
  const { _id,img, amount, serviceName, description, area } = service;

  

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
      <img className="w-24 h-20 object-cover mx-auto" src={img} alt="" />
      <div className="px-3 py-2">
        <div className="font-bold text-sm mb-1">{serviceName}</div>
        <p className="text-gray-700 text-xs">{description}</p>
        <p className="text-gray-600 text-xs mt-1">{area}</p>
        <p className="text-gray-900 font-bold text-sm mt-1">${amount}</p>
        <div className="flex justify-between mt-3">
          <button
            onClick={() => handleDelete(_id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
          <Link to={`/desh/update/${_id}`}>
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fromdata;
