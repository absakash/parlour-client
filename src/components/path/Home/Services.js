import React from "react";

import Batt from "../../shared/Batt";
import { useQuery } from "react-query";

import { Link } from "react-router-dom";

const Services = () => {

  const {data:servicesData=[]}=useQuery({
    queryKey:['service'],
    queryFn: async()=>{
      const res=await fetch('http://localhost:4000/services',{
       
      })
      const data=await res.json();
      // console.log("services data ",data);
      return data;
    }
    
  })

 
 


  // const handleAddtoBookingList=data=>{

  //   const {_id,title,description,price,img}=data;
  //   const user={
  //     id:_id,title,description,price,img
  //   }
  //   console.log("user  data :  ",user);

  //   const confirmation =window.confirm('do you want to this treatment : ')
  //   console.log(confirmation)
   

  //   if(confirmation===true){
  //     fetch('http://localhost:4000/booking',{
  //       method:'POST',
  //       headers:{
  //         'content-type':'application/json'
  //       },
  //       body:JSON.stringify(user)
  //     })
  //     .then(res=>res.json())
  //     .then(datas=>{
  //       // console.log(datas)
  //       console.log(datas);
  //       if(datas){
  //         toast.success('successfully booked ');
  //         // navigate(`/dashboard/booking/${id}`)
  //       }
        
  //     }).catch(error=>{
  //       console.log(error);
  //     })
  //   }
      
    
   
  // }

  return (
    <div className="py-20">
      <div className="text-3xl font-bold text-center">
        Our Awesome <span className="text-red-500">Services</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {servicesData && servicesData.map((service) => (
          <div service={service} className="mb-4">
            <div className="card w-96 bg-base-100 shadow-xl h-80">
              <figure className="px-10 pt-10">
                <img
                  src={service.img}
                  alt="Service"
                  className="rounded-xl w-20 h-20"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-2xl">
                  {service.title}
                </h2>
                <p className=" text-red-500 font-serif font-semibold">
                  $ {service.price}
                </p>
                <p>{service.description}</p>
                <Link to={`/problem/${service._id}`}  className="btn bg-red-500" > get the service</Link>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" justify-center align-center content-center flex">
         <Batt>Explore more</Batt>
      </div>
    </div>
  );
};

export default Services;
