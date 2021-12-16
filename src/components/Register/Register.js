import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, } = useForm();
    const {registerWithEmail} = useAuth();
    const navigate = useNavigate();
    const onSubmit = data => registerWithEmail(data.email, data.password, data.name, navigate, "/");
    return (
        <div className='home-body p-5 form-body'>
            <div className='form-container '>
                <h2>Register</h2>
                <form className='input' onSubmit={handleSubmit(onSubmit)}>
                

                    <div className='inputBox'>
                        <label htmlFor="">Name</label>
                        <input {...register("name")} type="text" required  placeholder='your name' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Email</label>
                        <input {...register("email")} type="text" required  placeholder='your email' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Password</label>
                        <input {...register("password")} type="password" minLength={6} required  placeholder='your password' />
                    </div>
                    <div className='inputBox'>
                        <input type="submit" value={'Register'} />
                    </div>
                
                </form>
                <p className='mt-2'> <NavLink className="text-decoration-none" to="/login">
          Already an Account? Please Login!
        </NavLink></p>
            </div>
        </div>
    );
};

export default Register;