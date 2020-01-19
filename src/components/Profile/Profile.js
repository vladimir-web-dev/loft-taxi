import React from 'react';
import Header from '../Header';

function Profile(props) {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <h1>Profile</h1>
        </section>
    );
}

export default Profile;