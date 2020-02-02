import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsAuthenticated } from '../modules/auth';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: RouteComponent,  ...rest}) => {
    const isAuthenticated = useSelector(state => getIsAuthenticated(state.authReducer));

    return (
        <Route 
            {...rest} 
            render={props => isAuthenticated 
                ? <RouteComponent {...props} /> 
                : <Redirect to='/login' />
            } 
        />
    );
}

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.element.isRequired
// }

export default PrivateRoute;

