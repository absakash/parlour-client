import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContexts } from "../../context/AuthContext";
import google from "../../../assets/google.jpg";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import UseToken from "../../hooks/UseToken";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [createUseremail, setCreateuseremail] = useState("");
  const [token] = UseToken(createUseremail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signWithGoogle, registerUser, updateUser } = useContext(AuthContexts);

  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // register from here ....

    registerUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (user) {
          //updating user from here ......
          const name = data.fname + " " + data.lname;
          setLoading(true)

          // updating user here ......
          

            toast.success('successfully registerded .....')
            saveUserDatabase(name, user.email, data.password);


         

          // navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUserDatabase = (name, email, password) => {
    const user = { name, email, password };
    // console.log("save user database",user);
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          setLoading(true);
          console.log('saving the data ',data);
          toast.success('successfully submitted and token has generated ......')

          setCreateuseremail(email);
          reset()
          // toast.error('paini token ekon o');
          
         
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch('http://localhost:4000/users',{
  //   method:'POST',
  //   headers:{
  //     'content-type':'application/json'
  //   },
  //   body:JSON.stringify(user)
  // })
  // .then(res=>res.json())
  // .then(saveData=>{
  //   if(saveData){
  //     setCreateuseremail(email);
  //     console.log("saving the  user ",saveData);
  //     toast.success('succesffuly hoice mone hoiii')
  //   }
  // })

  // const getUserToken=email=>{
  //   console.log("email is coming ",email);
  //   fetch(`http://localhost:4000/jwt?email=${email}`)
  //   .then(res=>res.json())
  //   .then(tokenData=>{
  //     if(tokenData.accessToken){
  //       toast.success('registered successfully .....');
  //       localStorage.setItem('localooo',tokenData.accessToken)
  //       console.log("toe ",tokenData.access_token);
  //       reset();

  //     }
  //   })
  // }

  return (
    <div className="py-20">
      <div className="py-15 bg-red-50">
        <div className="py-10">
          <p className="text-center text-3xl font-semibold">
            Let's Register Myself Here .

            
          </p>
          <h2>
            {/* {
              loading?"this is loading still ":'no loading leftooo'
            } */}
          
          </h2>
        </div>
        <div className="flex justify-center ">
          <form className=" border w-[500px]" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}

            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  placeholder="your first name : "
                  className="input input-bordered input-info w-full"
                  {...register("fname", { required: "first name is required" })}
                />
                <p className="text-red-700">{errors.fname?.message}</p>
                {/* <p>{ferror}</p> */}
              </div>

              <div>
                <input
                  placeholder="your last name : "
                  className="input input-bordered input-info w-full "
                  {...register("lname", { required: "last name is required" })}
                />
                <p className="text-red-700">{errors.lname?.message}</p>
              </div>

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
                  placeholder="Enter password : "
                  className="input input-bordered input-info w-full "
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 dight",
                    },
                  })}
                />
                <p className="text-red-700">{errors.phone?.message}</p>
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
      </div>

      {/* ?divider from here  */}

      <div className="flex justify-center  bg-red-50">
        <div className="divider opacity-2 max-w-sm">
          -------------OR-----------
        </div>
      </div>

      {/* login with google ................ */}
      <div className=" bg-red-50">
        <div className="flex justify-center">
          <div
            onClick={handleGoogle}
            className="flex border p-2 rounded-3xl gap-[100px] "
          >
            <img className="w-10 ml-2" src={google} alt="" />
            <p className="mt-2 mr-5">Continue With Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
