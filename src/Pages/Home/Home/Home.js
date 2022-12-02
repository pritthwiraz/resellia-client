import React from 'react';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import BrandsLogo from '../BrandsLogo/BrandsLogo';
import ProductCategories from '../ProductCategories/ProductCategories';

// import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BrandsLogo></BrandsLogo>
            <ProductCategories></ProductCategories>
            <AdvertisedProduct></AdvertisedProduct>
        </div>
    );
};

export default Home;