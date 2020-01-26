import React from 'react';
import PropTypes from 'prop-types';
import RegistrationForm from '../RegistrationForm';


import logo from '../../images/logo.png';
import './RegistrationPage.css'

function RegistrationPage (props) {
    return (
        <section className='section registration'>
            <div className='registration__content'>
                    <div className='registration__left'> 
                        <img className='logo' src={logo} alt='Logo'></img>
                    </div>
                    <div className='registration__right'>
                        <RegistrationForm changePage={ props.changePage }/>
                    </div>        
                </div>                       
        </section>
    );   
}

RegistrationPage.propTypes = {
    changePage: PropTypes.func.isRequired
}


export default RegistrationPage;