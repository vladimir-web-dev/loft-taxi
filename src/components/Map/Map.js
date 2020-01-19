import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';

function Map(props) {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <h1>Map</h1>
        </section>
    );
}

Map.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default Map;