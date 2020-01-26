import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';
import { authorizationCheckHOC } from '../../HOCs'

let ProfilePage = (props) => {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <h1>Profile</h1>
        </section>
    );
}

ProfilePage = authorizationCheckHOC(ProfilePage);

ProfilePage.propTypes = {
    changePage: PropTypes.func.isRequired
}


export default ProfilePage;