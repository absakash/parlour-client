import { Button } from "bootstrap";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const PendingServices = () => {
  // const [change,setChange]=useState('Pending')
  // const [active, setActive] = useState('');

  let batoun = "Pending";
  const handlePending = (pen) => {
    // setChange('Done');
    // setActive(!active);

    fetch(`http://localhost:4000/addService/${pen._id}`,{
      method:'PUT'
    }).then(res=>res.json())
    .then(data=>{
      console.log(data);
      toast.success('successfully updated the status ........');
      refetch();
    })

    const done = {
      title: pen.title,
      description: pen.description,
      img: pen.img,
      price: pen.price,
    };
    console.log("done", done);

    fetch("http://localhost:4000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(done),
    })
      .then((res) => res.json())
      .then((servicesData) => {
        console.log(servicesData);
        if (servicesData.acknowledged) {
          toast.success("successfully uploaded to the services in home .......");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { data: pending = [],refetch } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/addService");
      const data = (await res).json();
      return data;
    },
  });

  return (
    <div className="mt-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
        {pending &&
          pending.map((pen) => (
            <div
              pen={pen}
              key={pen._id}
              className="card card-compact w-96 h-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={pen.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{pen.title}</h2>
                <p>{pen.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handlePending(pen)}
                    className="btn btn-primary"
                  >
                    {pen.status}
                  </button>
                  {/* style={{ backgroundColor: active ? "" : "red" }} */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PendingServices;
