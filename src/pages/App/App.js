import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
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
