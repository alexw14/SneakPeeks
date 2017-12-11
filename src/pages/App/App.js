import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import NewProject from '../NewProject/NewProject';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import userService from '../../utils/userService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSignUp = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  // Lifecycle Methods
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className='App'>
        <Nav 
          user={this.state.user}
          handleLogout={this.handleLogout} 
        />
        <Switch>
          <Route exact path='/' render={() =>
            <Home />
          }/>
          <Route exact path='/projects' render={() =>
            <Projects />
          }/>
          <Route exact path='/projects/new' render={(props) =>
            <NewProject 
              {...props}
            />
          }/>
          <Route exact path='/signup' render={(props) =>
            <SignUp 
              {...props}
              handleSignUp={this.handleSignUp}
            /> 
          }/>
          <Route exact path='/login' render={(props) => 
            <Login
              {...props}
              handleLogin={this.handleLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
