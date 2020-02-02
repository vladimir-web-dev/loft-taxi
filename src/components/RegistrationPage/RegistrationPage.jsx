import React from 'react';
import RegistrationForm from '../RegistrationForm';


import logo from '../../images/logo.png';
import './RegistrationPage.css'

export const RegistrationPage = () => {
    return (
        <section className='section registration'>
            <div className='registration__content'>
                    <div className='registration__left'> 
                        <img className='logo' src={logo} alt='Logo'></img>
                    </div>
                    <div className='registration__right'>
                        <RegistrationForm />
                    </div>        
                </div>                       
        </section>
    );   
};
