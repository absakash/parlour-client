import React from "react";

import first from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import Batt from "../../shared/Batt";

const Home = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img alt=""
          src={first}
          className="max-w-sm ml-12 rounded-lg"
        />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-left">Beauty Salon <br /> For Every Women</h1>
          <p className="py-6 text-left ">
            Lorem ipsum dolor sit amet  sequi inventore dignissimos labore cumque, repellat saepe quis amet.
          </p>
          <div className="">
          <Batt>Get an Appointment</Batt>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
