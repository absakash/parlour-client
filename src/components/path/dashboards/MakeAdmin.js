import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit=data=>{
      console.log(data);

      toast.success('submitted ....');

      reset();
  }

  return (
    <div className=" h-full bg-slate-100">
      <div className="py-20 p-10">
        <form onSubmit={handleSubmit(onSubmit)}
          action="">
          <h1 className="py-3">Enter your email here : </h1>
          
          <div className="flex gap-1">
          <div>
                <input
                  placeholder="your email : "
                  className="input input-bordered input-info w-96 py-2 "
                  {...register("email", { required: "email is required" })}
                />
                <p className="text-red-700">{errors.email?.message}</p>
            </div>
            <div>
            <input
                type="submit"
                className="btn bg-gradient-to-r from-primary to-secondary text-white"
              />
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
