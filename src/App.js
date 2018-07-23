import React, { Component } from 'react';
import './App.css';

import FetchTodosApi from './fetchTodosApi';
import Login from './login';
import withFetchingUser from './hocComponents/withFetchingUser';
import withSavingUser from './hocComponents/withSaveUser';
import SaveUser from './hocComponents/SaveUser';

import { checkLogin } from './services/auth';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  userSignIn = async (username, password) => {
    const userdata = await checkLogin(username, password);
    if (userdata) {
      this.setState({
        user: {
          access_token: userdata.accessToken,
          refresh_token: userdata.refreshToken,
          user_id: userdata.id
        }
      });
      localStorage.setItem('userdata',this.state.user);
    }
  }

  componentDidMount(){
    console.log(localStorage.getItem('userdata'))
  }

  signOut = () => {
    this.setState({
      user: null
    })
  }
  render() {
    return (
      <div className="App">
        {
          (this.state.user) ?
            <FetchTodosApi
              user={this.state.user}
              onSignOut={this.signOut}
            />
            :
            <Login
              onSignIn={this.userSignIn}
            />
        }
      </div>
    );
  }
}

export default App;
