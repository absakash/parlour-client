import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import { AuthContexts } from "../../context/AuthContext";

const Booking = () => {
  const {user}=useContext(AuthContexts)
  const url=`http://localhost:4000/booking?email=${user?.email}`;
  const { data: bookingss = [] } = useQuery({
    queryKey: ["booking",user?.email],
    queryFn: async () => {
      const res = await fetch(url,{
        headers:{
          authorization: `bearer: ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      console.log("booking  data  from booking ,,,,,",data);
      return data;
    },
  });



  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Paying Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingss &&
                bookingss.map((book) => (
                  <tr book={book} key={book._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={book.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{book.title}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Jerin's parlour
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Support Technician
                      </span>
                    </td>
                    <td >
                      $ {book.price}
                    </td>
                    <th>
                      <button className="btn btn-sm bg-red-500 ">Pay now</button>
                    </th>
                  </tr>
                ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
