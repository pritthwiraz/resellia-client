import React from 'react';
import { Link } from 'react-router-dom';
import laptop from '../../../Resources/Images/images/laptop-duo.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={laptop} alt="" className="rounded-lg" />
                <div>
                    <h1 className="text-5xl text-primary font-bold">Buy & Sell Used Laptop from Top Brands</h1>
                    <p className="py-6 text-xl">Resellia Offers A-grade used laptops with a goal of giving exceptional customer support, we are also working with multiple corporate clients. </p>
                    <Link className="btn btn-primary">Explore Resellia</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;