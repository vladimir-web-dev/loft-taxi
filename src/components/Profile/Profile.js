import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';

function Profile(props) {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <h1>Profile</h1>
        </section>
    );
}

Profile.propTypes = {
    changePage: PropTypes.func.isRequired
}


export default Profile;