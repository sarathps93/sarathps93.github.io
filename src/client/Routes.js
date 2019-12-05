import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import App from './pages/App';
import Profile from './pages/Profile/Profile';
import Skills from './pages/Skills/Skills';

const Routes = () => {
  return (
    <>
      <Header />
      <App>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/my-skills" component={Skills} />
        </Switch>
      </App>
    </>
  );
};

export default Routes;
