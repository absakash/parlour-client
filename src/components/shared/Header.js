import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import MyModal from "../path/logReg/MyModal";
import { AuthContexts } from "../context/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
  const {outUser}=useContext(AuthContexts)
  const {user}=useContext(AuthContexts)

  const handleOut=()=>{
      outUser()
      .then(()=>{
         toast.error('sign out ....')
      }).catch(error=>{
        console.log(error);
      })
  }
  const menuIteam = (
    <>
      <li>
        <Link to='/home'>Home</Link>
      </li>

      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
      <label htmlFor="amarModal" className="btn btn-sm mt-1">
        login
      </label>
      </li>

      <li>
        <Link onClick={handleOut}>log out</Link>
      </li>
      <li>
        <Link to='/dashboard'>dashboard</Link>
      </li>
      <li>
        <Link to='/ression'>Ression</Link>
      </li>
      <li>
        <Link to=''>{user?.email} </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 border-r-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >


            {menuIteam}
          </ul>
        </div>
        <div>
        <Link to='/jerin'>
        <img className="w-27 h-20" src={logo} alt="" />

        </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         
        {menuIteam}

        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Button</Link>
      </div>


      <MyModal></MyModal>
    </div>
  );
};

export default Header;
