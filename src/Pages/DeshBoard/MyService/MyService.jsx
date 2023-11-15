import React, { useEffect, useState } from "react";
import Fromdata from "../Fromdata/Fromdata";
import Swal from "sweetalert2";

const MyService = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://assinment-11-server-rust.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assinment-11-server-rust.vercel.app/booking/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // Update state after filtering out the deleted item
              setBooking((prevBooking) =>
                prevBooking.filter((item) => item._id !== _id)
              );
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
            }
          })
          .catch((error) => console.error("Error deleting:", error));
      }
    });
  };






  return (
    <div className="grid grid-cols-3">
      {booking.map((service) => (
        <Fromdata
          key={service._id}
          handleDelete={handleDelete}
          service={service}
        ></Fromdata>
      ))
      }
    </div>
  );
};

export default MyService;
