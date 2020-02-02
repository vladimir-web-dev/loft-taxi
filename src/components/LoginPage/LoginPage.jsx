import React from 'react';
import LoginForm from '../LoginForm';

import logo from '../../images/logo.png';
import './LoginPage.css';


function LoginPage (props) {
    return (
        <section className='section login'>
            <div className='login__content'>
                <div className='login__left'> 
                    <img className='logo' src={logo} alt="Logo"></img>
                </div>
                <div className='login__right'>
                    <LoginForm />
                </div>        
            </div>            
        </section>
    );
}

export default LoginPage;