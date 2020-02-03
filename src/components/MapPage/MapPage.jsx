import React from 'react';
import Header from '../Header';
import Map from '../Map';

const MapPage = props => {
    console.log(props)
    return (
        <section className='section'>
            <Header />
            <Map/>
        </section>
    );
}

export default MapPage;