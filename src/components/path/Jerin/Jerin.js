import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import google from "../../../assets/google.jpg";
import { AuthContexts } from "../../context/AuthContext";
const Jerin = () => {
    const {signWithGoogle}=useContext(AuthContexts)

    const handleGoogle=()=>{
        signWithGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user);
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-[150px]">
          <div>
            <img className="w-[150px] " src={logo} alt="" />
          </div>
          <div className="text-2xl font-serif mt-20 p-4">Login with</div>
        </div>
      </div>

      <div className="flex justify-center">
        <div onClick={handleGoogle} className="flex border p-2 rounded-3xl gap-[250px] m-5 ">
          <img className="w-10 ml-2" src={google} alt="" />
          <p className="mt-1 mr-5">Continue With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Jerin;
