import React from 'react';
import Home from './components/Home'
import Freelancers from "./components/Freelancers"
import QuemSomos from './components/QuemSomos'
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/freelancers'Component={Freelancers}/>
        <Route path='/quemsomos' Component={QuemSomos}/>
      </Routes>
    </React.StrictMode>
  </Router>
);