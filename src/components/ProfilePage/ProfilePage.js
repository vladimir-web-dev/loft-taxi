import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';
import { authorizationCheckHOC } from '../../HOCs'

const ProfilePage = (props) => {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <h1>Profile</h1>
        </section>
    );
}

ProfilePage.propTypes = {
    changePage: PropTypes.func.isRequired
}


export default authorizationCheckHOC(ProfilePage);