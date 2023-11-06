import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterRession = () => {
  const {
    register,
    handleSubmit,reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    const {name,nationalId}=data;
    const ressionUsers={
      name,nationalId,
      status:'Pending'
    }
    fetch('http://localhost:4000/ressionUsers',{
      method:'POST',
      headers:{
            'content-type':'application/json'
      },
      body:JSON.stringify(ressionUsers)
    })
    .then(res=>res.json())
    .then(da=>{
      if(da.acknowledged){
            toast.success('successfully register the national ID')
            console.log("ression user : ",da);
            reset()
      }
      
    })
  };
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center my-10 font-bold">
          ট্রেডিং কর্পোরেশন অব বাংলাদেশ (টিসিবি) <br />
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
        </h2>
      </div>
      <div className="flex justify-center">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="input input-bordered input-info w-96 my-2"
            defaultValue=""
            {...register("name", { required: "name is required " })}
            placeholder="enter your name "
          />
          <p className="text-red-700">{errors.name?.message}</p>

          <input
            className="input input-bordered input-info w-96"
            defaultValue=""
            {...register("nationalId", { required: "nationalId is required " })}
            placeholder="enter your id here"
          />
          <p className="text-red-700">{errors.nationalId?.message}</p>

          <div className="flex justify-center py-2">
            <input
              type="submit"
              className="btn bg-gradient-to-r from-primary to-secondary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterRession;
