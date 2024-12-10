import React from 'react';
import Slider from '../components/Slider/Slider';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';
import Pricing from '../components/Pricing';
import Feedback from '../components/Feedback';

const Home = () => {

     const products = useLoaderData()

    return (
        <div>
            <Slider></Slider>
            <Products products={products}></Products>
            <Pricing></Pricing>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;