import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Resources/Images/Icons/resizedImage.png'

const Header = () => {
    return (
        <div  className="bg-base-300">
            <div className="navbar">
                <div className="flex-1">
                    <Link className="btn btn-ghost"><img src={logo} alt="" /></Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
           
                </div>
            </div>
        </div>
    );
};

export default Header;