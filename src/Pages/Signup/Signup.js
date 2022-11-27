import React from 'react';
import { Link } from 'react-router-dom';
import signupimg from '../../Resources/Images/images/signup.png'

const Signup = () => {
    return (
        <div className="hero w-full my-10">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={signupimg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>    
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs"/>
                            
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>    
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs"/>
                            
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>    
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs"/>
                            
                        </div>
            
                        <input className='btn w-full mt-6' value="Signup" type="submit" />
                    </form>
                    <p>Already a member<Link className='text-primary' to="/login"> Please Login</Link></p>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;