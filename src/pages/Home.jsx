import React from 'react';
import Slider from '../components/Slider/Slider';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

     const products = useLoaderData()

    return (
        <div>
            <Slider></Slider>
            <Products products={products}></Products>
        </div>
    );
};

export default Home;