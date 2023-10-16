import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContexts } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseToken from "../../hooks/UseToken";

const MyModal = () => {
    const navigate=useNavigate()
    const [useremail,setUseremail]=useState('');
    const [token]=UseToken(useremail)

    const {loginUser}=useContext(AuthContexts)

    const {
        register,
        handleSubmit,
        reset,
    
        formState: { errors },
      } = useForm();
    

      const onSubmit = (data) => {
        console.log(data);

        loginUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            if(user){
                toast.success('user logged in successfully .......')
                console.log("login user", user);
                setUseremail(data.email)
                reset();
                navigate('/');
            }
        }).catch(error=>{
            console.log(error);
        })
      };
  return (
    <div>
    
      <input type="checkbox" id="amarModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-3xl text-center">Hello!</h3>
          <p className="py-2 text-center text-2xl font-sans textarea-md">Login Yourself here </p>




          {/* login form started from here ....... */}

          <div className="flex justify-center">
          <form className=" border w-[400px]" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}

            <div className="grid grid-cols-1 gap-4 justify-center">
             

              <div>
                <input
                  placeholder="your email : "
                  className="input input-bordered input-info w-full "
                  {...register("email", { required: "email is required" })}
                />
                <p className="text-red-700">{errors.email?.message}</p>
              </div>

              <div>
                <input
                  placeholder="Phone Password : "
                  className="input input-bordered input-info w-full "
                  {...register("password", {
                    required: "password is required ",
                    
                    minLength: {
                      value: 6,
                      message: "password must be 6 dight",
                    },
                  })}
                />
                <p className="text-red-700">{errors.password?.message} </p>
              </div>
            </div>

            <br />
 

            <div className="flex justify-center">
              <input
                type="submit"
                className="btn bg-gradient-to-r from-primary to-secondary text-white"
              />
            </div>
          </form>
          </div>

          
          <div className="modal-action">
            <label htmlFor="amarModal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
