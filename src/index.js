import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Route render={(props) =>
      <App {...props} />
    }/>
  </BrowserRouter>,
  document.getElementById('root')
);
