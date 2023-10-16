import React from "react";
import one from "../../../assets/images/Ellipse 90.png";
import two from "../../../assets/images/Ellipse 91.png";
import three from "../../../assets/images/Ellipse 92.png";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  const testiMonialsData = [
    {
      id: 1,
      name: "Nash Patrik",
      status: "CEO, Manpol",
      img: one,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis at cum porro inventore exercitationem consequatur eligendi asperiores deleniti!",
    },
    {
      id: 2,
      name: "Miriam Barron",
      status: " CEO, Manpol",
      img: two,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis at cum porro inventore exercitationem consequatur eligendi asperiores deleniti!",
    },
    {
      id: 1,
      name: "Bria Malone",
      status: "CEO, Manpol",
      img: three,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis at cum porro inventore exercitationem consequatur eligendi asperiores deleniti!",
    },
  ];
  return (
    <div className="py-20">
      <div className="text-center text-3xl font-semibold">Testimonials</div>

      <div className="flex gap-4  py-14 p-4">
        {testiMonialsData.map((testi) => (
          <div testi={testi} key={testi.id}>
            <div className="card w-96 h-62 bg-base-100 shadow-xl">
            <div className="flex gap-5">
                <div>
                    <img className="w-20 h-20 ml-3" src={testi.img} alt="" />
                </div>
                <div className="mt-3">
                    <p>{testi.name}</p>
                    <p>{testi.status}</p>
                </div>
            </div>
             
              <div className="p-4 items-center text-center  mt-3">
              
                <p className="text-sm">{testi.about}</p>
                
                <div className="flex">
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar></FaStar>
                </div>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

