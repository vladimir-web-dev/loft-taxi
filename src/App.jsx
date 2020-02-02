import React from 'react';
import LoginPage from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import  PrivateRoute from './HOCs';
import { getIsAuthenticated } from './modules/auth';
import { useSelector } from 'react-redux';

import './App.css';

function App () {
    const isAuthenticated = useSelector(state => getIsAuthenticated(state.authReducer));
    console.log(isAuthenticated)
    return (
        <Switch>
          <Redirect from="/" to='/login' exact />
          {
            isAuthenticated ? <Redirect from="/login" to='/map' /> : null
          }
          <Route path='/login' render={() => <LoginPage data-testid='login-page' />} />
          <Route path='/registration' render={() => <RegistrationPage data-testid='registration-page' />} />
          <PrivateRoute path='/map' component={MapPage} />
          <PrivateRoute path='/profile' component={ProfilePage} ></PrivateRoute>
          <Redirect to='/login' />
        </Switch>
    );  
}

export default App;
