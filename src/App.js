import React from 'react';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';
import './App.css';
import AuthContext from './context/AuthContext';

 
class App extends React.Component {
  state = {
    page: 'LOGIN',
    isLoggedIn: false
  }

  login = (email, password) => {
    if (email !== '' && password !== '') {
      this.isLoggedIn = true;
      this.changePage('MAP');
    }   
  }

  logout = () => {
    this.isLoggedIn = false;
    this.changePage('LOGIN');
  }

  changePage = newPage => {
    this.setState({page: newPage});
  }

  render() {
    const { page } = this.state;

    return (
      <AuthContext.Provider value={{
            isLoggedIn: this.isLoggedIn,
            login: this.login, 
            logout: this.logout
        }
      }>
        {
          {
            LOGIN: <LoginPage data-testid='login-page' changePage={this.changePage} />,
            REGISTRATION: <RegistrationPage data-testid='registration-page' changePage={this.changePage} />,
            MAP: <MapPage data-testid='map-page' changePage={this.changePage} />,
            PROFILE: <ProfilePage data-testid='profile-page' changePage={this.changePage} />
          }[page]
        }
      </AuthContext.Provider>      
    );
  }
}

export default App;
