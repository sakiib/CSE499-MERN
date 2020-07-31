import React from 'react';
import './Signup.css';

const Signup = () => {
    const showSignUpForm = () => (
        <form className='signup-form'>
            {/* username field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Username' type='text' />
            </div>
            {/* email field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Email address' type='email' />
            </div>
            {/* password field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Create password' type='password' />
            </div>
            {/* confirm password field */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Confirm password' type='password' />
            </div>
            {/* signup button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-black'> Create Account </button>
            </div>
            {/* Already have an account? */}
            <p className='text-center text-white'>
                Have an account?
                <a href='/login'> Log In</a>
            </p>
        </form>
    );
    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'> 
                { showSignUpForm() }
                </div>
            </div>
        </div>
    );
};

export default Signup;