import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, } = useForm();
    const {loginWithEmail} = useAuth();
    const navigate = useNavigate();
    const onSubmit = data => loginWithEmail(data.email, data.password, navigate, "/");
    return (
        <div className='home-body p-5 form-body'>
            <div className='form-container '>
                <h2>Login</h2>
                <form className='input' onSubmit={handleSubmit(onSubmit)}>
                
                <div className='inputBox'>
                    <label htmlFor="">Email</label>
                    <input {...register("email")} type="text" required  placeholder='your email' />
                </div>
                <div className='inputBox'>
                    <label htmlFor="">Password</label>
                    <input {...register("password")} type="password" minLength={6} required  placeholder='your password' />
                </div>
                <div className='inputBox'>
                    <input type="submit" value={'Login'} />
                </div>
            
            </form>
                <p className='mt-2'> <NavLink className="text-decoration-none" to="/register">
          Need an Account? Please Register!
        </NavLink></p>
            </div>
        </div>
    );
};

export default Login;