import React from "react";
import { useForm } from "react-hook-form";


const FormHome = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  
  // const ferror=watch('fname?.message')



  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="py-15 bg-red-50">
      <div className="py-10">
        <p className="text-center text-3xl font-semibold">
          Let us handle your <br /> project, professionally.
        </p>
      </div>
      <div className="flex justify-center ">
        <form className=" border w-[700px]" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}

          <div className="grid grid-cols-2 gap-5">
            <div>
              <input
                placeholder="your first name : "
                className="input input-bordered input-info w-full max-w-xs"
                {...register("fname", { required: "first name is required" })}
              />
              <p className="text-red-700">{errors.fname?.message}</p>
              {/* <p>{ferror}</p> */}
            </div>

            <div>
              <input
                placeholder="your last name : "
                className="input input-bordered input-info w-full max-w-xs"
                {...register("lname", { required: "last name is required" })}
              />
              <p className="text-red-700">{errors.lname?.message}</p>
            </div>

            <div>
              <input
                placeholder="your email : "
                className="input input-bordered input-info w-full max-w-xs"
                {...register("email", { required: "email is required" })}
              />
              <p className="text-red-700">{errors.email?.message}</p>
            </div>

            <div>
              <input
                placeholder="Phone number : "
                className="input input-bordered input-info w-full max-w-xs"
                {...register("phone", {
                  required: "phone is required",
                  minLength: {
                    value: 9,
                    message: "number must be 9 dight",
                  },
                })}
              />
              <p className="text-red-700">{errors.phone?.message}</p>
            </div>
          </div>

          <br />
          <div>
            <input
              placeholder="enter your message : "
              className="textarea input-bordered input-info w-full h-20"
              {...register("message")}
            />
          </div>

          <div className="flex justify-center py-5">
         
            <input type="submit" className="btn bg-gradient-to-r from-primary to-secondary text-white"  />
            
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default FormHome;
