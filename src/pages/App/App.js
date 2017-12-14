import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import HomePage from '../HomePage/HomePage';
import ProjectsIndexPage from '../ProjectsIndexPage/ProjectsIndexPage';
import ProjectShowPage from '../ProjectShowPage/ProjectShowPage';
import NewProjectPage from '../NewProjectPage/NewProjectPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import userService from '../../utils/userService';
import projectAPI from '../../utils/projectAPI';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      user: null,
    }
  }

  handleSignUp = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  findOneProject = (name) => {
    let project = null;
    if (this.state.projects) project = this.state.projects.find(project => project.title.replace(/\s/g, "").toLowerCase() === name);
    return project;
  }

  // Create new project in NewProjectForm component
  handleNewProjectForm = (project) => {
    let projectCopy = Object.assign({}, project);
    projectAPI.newProject(projectCopy)
      .then(() => {
        fetch('/api/projects')
          .then(res => res.json())
          .then((projects) => { this.setState({ projects }) })
      });
  }

  // Update Project's currentFunding in SupportProjectForm component
  handleSupportProjectForm = (project, amount) => {
    let projectCopy = Object.assign({}, project);
    projectCopy.currentFunding += parseInt(amount, 10);
    projectCopy.backers.push(this.state.user._id);
    projectAPI.update(projectCopy, projectCopy._id)
      .then(() => {
        fetch('/api/projects')
          .then(res => res.json())
          .then((projects) => { this.setState({ projects }) })
          .then(this.props.history.push('/'))
      });
  }

  // Lifecycle Methods
  componentDidMount() {
    let user = userService.getUser();
    let findProjects = fetch('/api/projects').then(res => res.json());
    Promise.all([user, findProjects]).then(data => {
      this.setState({ user: data[0], projects: data[1] });
    });
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
            <HomePage />
          } />
          <Route exact path='/projects' render={(props) =>
            <ProjectsIndexPage
              {...props}
              user={this.state.user}
              projects={this.state.projects}
            />
          } />
          <Route exact path='/projects/new' render={(props) =>
            userService.getUser() ?
              <NewProjectPage
                {...props}
                user={this.state.user}
                handleNewProjectForm={this.handleNewProjectForm}
              />
              :
              <Redirect to='/' />
          } />
          <Route path='/projects/:project' render={(props) =>
            <ProjectShowPage
              {...props}
              user={this.state.user}
              project={this.findOneProject(props.match.params.project)}
              handleSupportProjectForm={this.handleSupportProjectForm}
            />
          } />
          <Route exact path='/profile' render={(props) =>
            <ProfilePage
              {...props}
              user={this.state.user}
              projects={this.state.projects}
            />
          } />
          <Route exact path='/signup' render={(props) =>
            <SignUpPage
              {...props}
              handleSignUp={this.handleSignUp}
            />
          } />
          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleLogin={this.handleLogin}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
