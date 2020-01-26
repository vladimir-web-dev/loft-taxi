import React from 'react';
import PropTypes from 'prop-types';
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
                    <LoginForm changePage={props.changePage}/>
                </div>        
            </div>            
        </section>
    );
}

LoginPage.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default LoginPage;