import React from 'react';
import profession from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'


const Professionality = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img 
          alt=''
          src={profession} className="max-w-xl rounded-lg shadow-2xl" />

          <div className='w-1/2 ml-20 mt-0'>
            <h1 className="text-3xl font-semibold">Let us handle your <br /> screen Professionally.</h1>
            <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
            <button className="btn btn-primary">Get Started</button>
            <div className='flex flex-row py-10 gap-16'>
                <div className=''>
                    <p className='text-4xl text-red-600'>500+</p>
                    <p>Happy Customer</p>
                </div>
                <div>
                <p className='text-4xl text-red-600'>16+</p>
                <p>Total Services</p>

                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Professionality;
