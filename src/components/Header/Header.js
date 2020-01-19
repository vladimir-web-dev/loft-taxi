import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo-dark.png';

import './Header.css';

function Header ({changePage}) {
    const buttons = [
        {id: 1, text: 'Карта', page: 'MAP'},
        {id: 2, text: 'Профиль', page:'PROFILE'},
        {id: 3, text: 'Выйти', page:'LOGIN'}
    ]

    return (
        <header className='header'>
            <div className='header__logo'>
                <img className='logo' src={logo} alt='logo'></img>
            </div> 
            <ul className='header__buttons-list'>
                {
                    buttons.map((val) => {
                        return (
                            <li className='header__buttons-item' key={val.id}>
                                <Button onClick={() => changePage(val.page)}>{val.text}</Button>
                            </li>
                        );
                    })
                }
            </ul> 
        </header>
    );
}

Header.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default Header;