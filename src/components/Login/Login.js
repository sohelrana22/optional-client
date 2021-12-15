import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className='home-body p-5 form-body'>
            <div className='form-container '>
                <h2>Login</h2>
                <div className='input'>
                    <div className='inputBox'>
                        <label htmlFor="">Email</label>
                        <input type="text" name='' placeholder='your email' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Password</label>
                        <input type="password" name='' placeholder='your password' />
                    </div>
                    <div className='inputBox'>
                        <input type="submit" name=''value={'Login'} />
                    </div>
                </div>
                <p className='mt-2'> <NavLink className="text-decoration-none" to="/register">
          Need an Account? Please Register!
        </NavLink></p>
            </div>
        </div>
    );
};

export default Login;