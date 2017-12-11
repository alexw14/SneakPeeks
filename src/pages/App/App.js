import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import userService from '../../utils/userService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
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
        <Navbar 
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
        </Switch>
      </div>
    );
  }
}

export default App;
