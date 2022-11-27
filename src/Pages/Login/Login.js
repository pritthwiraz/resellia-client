import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginimg from '../../Resources/Images/images/login.png'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>    
                                </label>
                                <input type="text" {...register("email", {required: "Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
                                {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>    
                                </label>
                                <input type="text" {...register("password",{required: "Password is required", minLength:{ value: 6, message:"passwword must be 6 charaters or longer"}})} className="input input-bordered w-full max-w-xs"/>
                                {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}    
                            </div>
                
                            <input className='btn w-full mt-6' type="submit" />
                        </form>
                        <p>First Time at Resellia<Link className='text-primary' to="/signup">Create an Account</Link></p>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;