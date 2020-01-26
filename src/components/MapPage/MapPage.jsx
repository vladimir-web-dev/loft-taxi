import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';
import Map from '../Map';
import { authorizationCheckHOC } from '../../HOCs'

const MapPage = props => {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <Map/>
        </section>
    );
}

MapPage.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default authorizationCheckHOC(MapPage);;