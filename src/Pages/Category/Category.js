import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const {img} = useLoaderData();
        

    return (
        <div>
            {/* <h2></h2> */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    {/* <h2 className="card-title"></h2> */}
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;