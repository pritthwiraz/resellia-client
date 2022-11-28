import React from 'react';

const Category = ({ productCategory }) => {

    const { img, brand, description } = productCategory;

    return (

        <div className="card lg:card-side bg-base-200">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Model</button>
                </div>
            </div>
        </div>

    );
};

export default Category;