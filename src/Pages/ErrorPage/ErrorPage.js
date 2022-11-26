import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Resources/Images/images/Error.jpg'

const ErrorPage = () => {
    return (
        <div className="bg-no-repeat bg-center min-h-screen" style={{ backgroundImage: `url(${error})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg mt-32 pl-20">
                    {/* <h1 className="mb-5 text-5xl font-bold"></h1> */}
                    <p className="mb-5"></p>
                    <Link to='/' className="btn ">Go Back To Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;