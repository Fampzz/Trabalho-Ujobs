import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import QuemSomos from './QuemSomos';
import Freelancers from './Freelancers';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/freelancers" component={Freelancers} />
      </Switch>
    </Router>
  );
};

export default App;