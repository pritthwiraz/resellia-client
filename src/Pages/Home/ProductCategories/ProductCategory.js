import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({productCategory}) => {
    const {img, brand, description, _id} = productCategory;


    return (

        <div className="card lg:card-side bg-base-200">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{brand}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${_id}`}>
                    <button className="btn btn-primary">View Models</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
};

export default ProductCategory;