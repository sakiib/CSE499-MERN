import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const[formData, setFormData] = useState({
        username: '',
        email: '', 
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false
    });
    const {
        username, 
        email, 
        password, 
        password2, 
        successMsg, 
        errorMsg, 
        loading
    } = formData;

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    };

    const showSignUpForm = () => (
        <form className='signup-form' onSubmit={handleSubmit}>
            {/* username field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input name='username' value={ username } className='form-control' placeholder='Username' type='text' onChange={handleChange} />
            </div>
            {/* email field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input name='email' value={ email } className='form-control' placeholder='Email address' type='email'  onChange={handleChange} />
            </div>
            {/* password field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='password' value={ password } className='form-control' placeholder='Create password' type='password'  onChange={handleChange} />
            </div>
            {/* confirm password field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='password2' value={ password2 } className='form-control' placeholder='Confirm password' type='password'  onChange={handleChange} />
            </div>
            {/* signup button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-black'> Create Account </button>
            </div>
            {/* Already have an account? */}
            <p className='text-center text-white'>
                Have an account?
                <Link to='/signin'> Sign In </Link>
            </p>
        </form>
    );
    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'> 
                { showSignUpForm() }
                <p style={{ color: 'white' }}> { JSON.stringify(formData) } </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;