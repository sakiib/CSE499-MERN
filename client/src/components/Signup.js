import React, { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg } from '../helpers/message';
import { showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';
import { signup } from '../api/auth';

const Signup = () => {
    let history = useHistory();
    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }
    }, [history]);
    const[formData, setFormData] = useState({
        username: '',
        email: '', 
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false,
    });
    const {
        username, 
        email, 
        password, 
        password2, 
        successMsg, 
        errorMsg, 
        loading,
    } = formData;

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: '',
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // npm validator
        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required'
            });
        } else if (!isEmail(email)) {
            console.log('invalid email');
            setFormData({
                ...formData,
                errorMsg: 'Invalid email'
            });
        } else if (!equals(password, password2)) {
            console.log('password doesnot mathc');
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match'
            });
        } else {
            // Success
            const { username, email, password } = formData;
            const data = { username, email, password };
            setFormData({ ...formData, loading: true });
            signup(data)
                .then((response) => {
                    console.log('axios signup success ', response);
                    setFormData({
                        username: '', 
                        email: '', 
                        password: '', 
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage
                    });
                })
                .catch((err) => {
                    console.log('axios signup error ', err);
                    setFormData({ ...formData, loading: false, errorMsg: err.response.data.errorMessage });
                });
        }
    };

    const showSignUpForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
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
                <button type='submit' className='btn btn-primary btn-block'> Signup </button>
            </div>
            {/* Already have an account? */}
            <p className='text-center text-white'>
                Have an account?
                <Link to='/signin'> Log In </Link>
            </p>
        </form>
    );
    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'> 
                { errorMsg && showErrorMsg(errorMsg) }
                { successMsg && showSuccessMsg(successMsg) }
                <div className='text-center pb-4'> { loading && showLoading() } </div>
                { showSignUpForm() }
                </div>
            </div>
        </div>
    );
};

export default Signup;