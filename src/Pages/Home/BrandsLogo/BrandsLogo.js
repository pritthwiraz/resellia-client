import React from 'react';

import logo1 from '../../../Resources/Images/Icons/Dell_Logo.png'
import logo2 from '../../../Resources/Images/Icons/HP-Logo.png'
import logo3 from '../../../Resources/Images/Icons/Lenovo_logo.png'
import logo4 from '../../../Resources/Images/Icons/Toshiba_logo.png'

const BrandsLogo = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center text-5xl mb-5'>Laptops From Trusted Brand</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
                <div className=" w-full lg:w-72 h-30 bg-base-100 pt-3">
                    <img src={logo1} alt="" />
                </div>
                <div className=" w-full lg:w-72 h-30 bg-base-100 ">
                    <img src={logo2} alt="" />
                </div>
                <div className=" w-full lg:w-72 h-30 bg-base-100 pt-5">
                    <img src={logo3} alt="" />
                </div>
                <div className=" w-full lg:w-72 h-30 bg-base-100 pt-5">
                    <img src={logo4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrandsLogo;