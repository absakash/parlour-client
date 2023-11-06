import React from "react";
import logo from '../../assets/logo.png'
import { Link, Outlet, useLoaderData } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <div className="w-[1200px]">
      <div className="drawer lg:drawer-open">
      
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link to='/jerin'>
              <img className="w-32" src={logo} alt="" />
            </Link>
            <li>
              <Link to='/dashboard/orderList'>Order List</Link>
            </li>
            <li>
              <Link to='/dashboard/addServices'>Add Services</Link>
            </li>
            <li>
              <Link to='/dashboard/makeAdmin'>Make Admin</Link>
            </li>
            <li>
              <Link to='/dashboard/managesService'>Manages Services</Link>
            </li>
            <li>
              <Link to='/dashboard/users'>users</Link>
            </li>
            {/* <li>
              <Link to='/dashboard/booking/${:id}'>booking</Link>
            </li> */}
            <li>
            <Link to='/dashboard/booking'>Go to Booking</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
