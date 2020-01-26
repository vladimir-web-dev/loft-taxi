import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';
import Map from '../Map';
import { authorizationCheckHOC } from '../../HOCs'

let MapPage = props => {
    return (
        <section className='section'>
            <Header changePage={props.changePage} />
            <Map/>
        </section>
    );
}

MapPage = authorizationCheckHOC(MapPage);

MapPage.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default MapPage;