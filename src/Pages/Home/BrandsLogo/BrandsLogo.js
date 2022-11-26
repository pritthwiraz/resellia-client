import React from 'react';
import './BrandsLogo.css'
import logo1 from '../../../Resources/Images/Icons/Dell_Logo.png'
import logo2 from '../../../Resources/Images/Icons/HP-Logo.png'
import logo3 from '../../../Resources/Images/Icons/Lenovo_logo.png'
import logo4 from '../../../Resources/Images/Icons/Toshiba_logo.png'

const BrandsLogo = () => {
    return (
        <section className='team'>
            <div className=''>
                <h1 className='text-3xl'>Our Team of Professinal Chefs</h1>
                <div className='box'>
                    <img src={logo1} alt='' />
                    
                </div>
                <div className='box'>
                    <img src={logo2} alt='' />
                    
                </div>
                <div className='box'>
                    <img src={logo3} alt='' />
                    
                </div>
                <div className='box'>
                    <img src={logo4} alt='' />
                    
                </div>
            </div>
        </section>
    );
};

export default BrandsLogo;