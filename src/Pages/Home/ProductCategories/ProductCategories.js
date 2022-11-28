import React, { useEffect, useState } from 'react';
import Category from './Category';

const ProductCategories = () => {
    const [productCategories, setProcuctCategories] = useState([])

    useEffect( () => {
        fetch('laptopBrands.json')
        .then(res => res.json())
        .then(data => setProcuctCategories(data))
    }, [])

    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-center text-5xl mb-10'>Select From Available Brands</h2>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
                {
                    productCategories.map(category => <Category
                    key={category._id}
                    productCategory={category}
                    ></Category>)
                }
            </div>

        </div>
    );
};

export default ProductCategories;