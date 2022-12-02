import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hook/useToken';
import signupimg from '../../Resources/Images/images/signup.png'

const Signup = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()
    const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }

    const handleSignUp = (data) =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then( () => {})
            saveUser(data.name, data.email);
        })
        .catch(error => console.log(error));
    }

    const saveUser = (name, email) => {
        const user ={name, email};
        fetch('https://resellia-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email);
            
        })
    }



    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-10">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={signupimg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>    
                            </label>
                            <input type="text" {...register("name", {required: "Name is required"})}  className="input input-bordered w-full max-w-xs"/>
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}  
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>    
                            </label>
                            <input type="email" {...register("email", {required: "Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>    
                            </label>
                            <input type="text" {...register("password", {required: "Password is required", minLength:{ value: 6, message:"passwword must be 6 charaters or longer"}})} className="input input-bordered w-full max-w-xs"/>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
            
                        <input className='btn w-full mt-6' value="Signup" type="submit" />
                    </form>
                    <p>Already a member<Link className='text-primary' to="/login"> Please Login</Link></p>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;