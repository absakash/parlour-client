import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContexts } from "../../context/AuthContext";

const Problem = () => {

  const { title,description,img ,price} = useLoaderData();
  const {user}=useContext(AuthContexts)
  const email=user?.email;
  const handleAddtoBookingList=()=>{
      const user={ title,description,img ,price,email
      
      };
      fetch('http://localhost:4000/booking',{
            method:'POST',
            headers:{
                  'content-type':'application/json'
            },
            body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(da=>{
            console.log("da",da);
            toast.success('sumbiited');
      }).catch(error=>{
            console.log(error);
      })
  }
  return (
    <div className="mt-20">
      
      <div className="flex justify-center">
        <div className="card card-compact w-96 h-80  bg-base-100 shadow-xl">
          <figure>
            <img className="w-28 h-24"
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title} </h2>
            <p>{description}</p>
            <p className="text-red-500 font-serif text-2xl text-center">
            $ {price}</p>
            <Link to='/dashboard/booking' onClick={()=>handleAddtoBookingList()}  className="btn btn-primary">Add to Booking list</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
