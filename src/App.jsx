import React from 'react';
import LoginPage from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import  PrivateRoute from './HOCs';

import './App.css';

function App () {
    return (
        <Switch>
          <Route path='/login' render={props => <LoginPage data-testid='login-page' {...props} />} />
          <Route path='/registration' render={props => <RegistrationPage data-testid='registration-page' {...props} />} />
          <PrivateRoute path='/map'  render={props => <MapPage data-testid='map-page' {...props} /> } />
          <PrivateRoute path='/profile' render={props => <ProfilePage data-testid='profile-page' {...props} /> } />
          <Redirect to='/login' />
        </Switch>
    );  
}

export default App;
