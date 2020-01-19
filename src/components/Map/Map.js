import React from 'react';
import Header from '../Header';

function Map(props) {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <h1>Map</h1>
        </section>
    );
}

export default Map;