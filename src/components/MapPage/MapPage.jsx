import React from 'react';
import Header from '../Header';
import Map from '../Map';
import Addresses from '../Addresses';

const MapPage = props => {
   
    return (
        <section className='section'>
            <Header />
            <div style={{position: 'relative', height: '100%'}}>
                <Map/>
                <div style={{position: 'absolute', top: '20px', left: '20px'}}>
                    <Addresses/>
                </div>
            </div>
            
        </section>
    );
}

export default MapPage;