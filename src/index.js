import React from 'react';
import Home from './components/Home'
import Freelancers from "./components/Freelancers"
import QuemSomos from './components/QuemSomos'
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/freelancers'>
          <Freelancers />
        </Route>
        <Route path='/quemsomos'>
          <QuemSomos />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>
);