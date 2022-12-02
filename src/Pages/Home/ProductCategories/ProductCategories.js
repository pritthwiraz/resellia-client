import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory';


const ProductCategories = () => {
    const [productCategories, setProductCategories] = useState([])

    useEffect( () =>{
        fetch('https://resellia-server.vercel.app/laptopBrands')
        .then(res => res.json())
        .then(data => setProductCategories(data))
    }, [])

    return (
        <div className='container mx-auto my-10'>
        <h2 className='text-center text-5xl mb-10'>Select From Available Brands</h2>
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
        {
            productCategories.map(productCategory => <ProductCategory
            key={productCategory._id}
            productCategory={productCategory}
            ></ProductCategory>)
        }
        </div>

    </div>
    );
};

export default ProductCategories;