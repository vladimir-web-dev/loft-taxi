import React from 'react';
import Login from './components/Login';
import Registration from './components/Registration';
import Map from './components/Map';
import Profile from './components/Profile';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        page: 'LOGIN'         
      }
  }

  changePage = newPage => {
    this.setState({page: newPage});
  }

  render() {
    const { page } = this.state;

    return (
      <div className='pages'>
        {
          {
            LOGIN: <Login changePage={this.changePage} />,
            REGISTRATION: <Registration changePage={this.changePage} />,
            MAP: <Map changePage={this.changePage} />,
            PROFILE: <Profile changePage={this.changePage} />
          }[page]
        }
      </div>
    );
  }
}

export default App;
