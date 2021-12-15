import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='home-body p-5 form-body'>
            <div className='form-container '>
                <h2>Register</h2>
                <div className='input'>
                    <div className='inputBox'>
                        <label htmlFor="">Name</label>
                        <input type="text" name='' placeholder='your name' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Email</label>
                        <input type="text" name='' placeholder='your email' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Password</label>
                        <input type="password" name='' placeholder='your password' />
                    </div>
                    <div className='inputBox'>
                        <input type="submit" name=''value={'Register'} />
                    </div>
                </div>
                <p className='mt-2'> <NavLink className="text-decoration-none" to="/login">
          Already an Account? Please Login!
        </NavLink></p>
            </div>
        </div>
    );
};

export default Register;