import React from 'react';
import Home from './Home';
import Services from './Services';
import Professionality from './Professionality';
import Testimonials from './Testimonials';
import FormHome from './FormHome';

const HomeAll = () => {
    return (
        <div>
        <Home></Home> 
        <Services></Services>
        <Professionality></Professionality>
        <Testimonials></Testimonials>
        <FormHome></FormHome>
        </div>
    );
};

export default HomeAll;
